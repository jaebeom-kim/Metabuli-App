.PHONY: all clean

FRONTEND_APP := metabuli
metabulilink := https://mmseqs.com/metabuli/

all: mac linux win
ifneq ($(shell uname -s),Darwin)
# llvm-lipo is part of llvm since release 14
LIPO ?= llvm-lipo
else
LIPO ?= lipo
endif

win: resources/win/${FRONTEND_APP}.bat 
mac: resources/mac/${FRONTEND_APP}  resources/mac/fastp resources/mac/fastplong 
linux: resources/linux/${FRONTEND_APP} resources/linux/fastp resources/linux/fastplong

# macOS
resources/mac/${FRONTEND_APP}:
	mkdir -p resources/mac
	wget -nv -q -O - https://mmseqs.com/metabuli/metabuli-osx-universal.tar.gz | tar -xOf - ${FRONTEND_APP}/bin/${FRONTEND_APP} > resources/mac/${FRONTEND_APP}
	chmod +x resources/mac/${FRONTEND_APP}

resources/mac/fastp:
	mkdir -p resources/mac
	wget -nv -q -O - https://github.com/jaebeom-kim/fastp/releases/download/v0.0.1/fastp-osx-universal.gz | gunzip > resources/mac/fastp
	chmod +x resources/mac/fastp

resources/mac/fastplong:
	mkdir -p resources/mac
	wget -nv -q -O - https://github.com/jaebeom-kim/fastplong/releases/download/v0.0.1/fastplong-osx-universal.gz | gunzip > resources/mac/fastplong
	chmod +x resources/mac/fastplong

# Linux
resources/linux/${FRONTEND_APP}-sse2:
	mkdir -p resources/linux/
	wget -nv -q -O - https://mmseqs.com/metabuli/metabuli-linux-sse2.tar.gz | tar -xOf - ${FRONTEND_APP}/bin/${FRONTEND_APP} > resources/linux/${FRONTEND_APP}-sse2
	chmod +x resources/linux/${FRONTEND_APP}-sse2

resources/linux/${FRONTEND_APP}-avx2:
	mkdir -p resources/linux
	wget -nv -q -O - https://mmseqs.com/metabuli/metabuli-linux-avx2.tar.gz | tar -xOf - ${FRONTEND_APP}/bin/${FRONTEND_APP} > resources/linux/${FRONTEND_APP}-avx2
	chmod +x resources/linux/${FRONTEND_APP}-avx2

resources/linux/${FRONTEND_APP}: ./${FRONTEND_APP}-wrapper.sh resources/linux/${FRONTEND_APP}-avx2 resources/linux/${FRONTEND_APP}-sse2
	cp ./${FRONTEND_APP}-wrapper.sh resources/linux/${FRONTEND_APP}
	chmod +x resources/linux/${FRONTEND_APP}

resources/linux/fastp:
	mkdir -p resources/linux
	wget http://opengene.org/fastp/fastp && mv fastp resources/linux/fastp && chmod a+x resources/linux/fastp

resources/linux/fastplong:
	mkdir -p resources/linux
	wget http://opengene.org/fastplong/fastplong && mv fastp resources/linux/fastplong && chmod a+x resources/linux/fastplong

# Windows
resources/win/${FRONTEND_APP}.bat:
	mkdir -p resources/win/
	cd resources/win && wget -nv -O ${FRONTEND_APP}-win64.zip https://mmseqs.com/metabuli/metabuli-win64.zip \
		&& unzip ${FRONTEND_APP}-win64.zip && mv ${FRONTEND_APP}/* . && rmdir ${FRONTEND_APP} && rm ${FRONTEND_APP}-win64.zip
	chmod -R +x resources/win/${FRONTEND_APP}.bat resources/win/bin/*

resources/win/fastp:
	mkdir -p resources/win/
	wget https://github.com/jaebeom-kim/fastp/releases/download/v0.0.1/fastp-windows.exe && mv fastp-windows.exe resources/win/fastp && chmod a+x resources/win/fastp

resources/win/fastplong:
	mkdir -p resources/win/
	wget https://github.com/jaebeom-kim/fastplong/releases/download/v0.0.1/fastplong-windows.exe && mv fastplong-windows.exe resources/win/fastplong && chmod a+x resources/win/fastplong

clean:
	@rm -rf resources/mac/* resources/linux/* resources/win/* 