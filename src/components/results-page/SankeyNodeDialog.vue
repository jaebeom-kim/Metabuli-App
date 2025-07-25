<template>
  <v-dialog height="100%" max-width="window.innerWidth" scrollable>
    <v-card>
      <!-- Close Dialog Button -->
      <v-card-actions class="py-0">
        <v-btn
          rounded="xl"
          icon="$close"
          color="gray"
          @click="$emit('close-dialog')"
        ></v-btn>
      </v-card-actions>

      <v-card-item class="mx-0 pt-0 summary">
        <!-- Taxon Name Title -->
        <v-card-title class="font-weight-black mb-2">{{
          nodeDetails.data.name
        }}</v-card-title>

        <v-row>
          <!-- Rank Column -->
          <v-col>
            <v-card-subtitle>Rank</v-card-subtitle>
            <v-chip
              :color="getRankColor(nodeDetails.data.rank)"
              rounded="xl"
              variant="outlined"
              density="compact"
              class="font-weight-bold"
              label
              >{{ nodeDetails.data.rank }}</v-chip
            >
          </v-col>

          <!-- Proportion Column -->
          <v-col>
            <v-card-subtitle>Proportion</v-card-subtitle>
            <v-card-text>{{ nodeDetails.data.proportion }}%</v-card-text>
          </v-col>

          <!-- Clade Reads Column -->
          <v-col>
            <v-card-subtitle>Clade Reads</v-card-subtitle>
            <v-card-text>{{ nodeDetails.data.clade_reads }}</v-card-text>
          </v-col>

          <!-- Taxon Reads Column -->
          <v-col>
            <v-card-subtitle>Taxon Reads</v-card-subtitle>
            <v-card-text>{{ nodeDetails.data.taxon_reads }}</v-card-text>
          </v-col>

          <v-spacer></v-spacer>

          <!-- Tax ID Column -->
          <v-col style="text-align: right">
            <v-card-subtitle>Tax ID</v-card-subtitle>
            <v-card-text>{{ nodeDetails.data.taxon_id }}</v-card-text>
          </v-col>

          <v-col class="d-flex flex-column justify-start">
            <v-btn
              color="primary"
              append-icon="$openInNew"
              text="NCBI"
              class="button-text-right text-none"
              size="small"
              variant="text"
              :href="`https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${nodeDetails.data.taxon_id}`"
              target="_blank"
            ></v-btn>
            <v-btn
              color="primary"
              append-icon="$openInNew"
              text="Assemblies"
              class="button-text-right text-none"
              size="small"
              variant="text"
              :href="`https://www.ncbi.nlm.nih.gov/assembly/?term=txid${nodeDetails.data.taxon_id}[Organism:exp]`"
              target="_blank"
            ></v-btn>
          </v-col>
        </v-row>
      </v-card-item>

      <v-divider></v-divider>

      <!-- Full Lineage & Subtree Sankey -->
      <v-card-item class="pb-7">
        <v-card-subtitle class="opacity-100 font-weight-bold"
          >Full Lineage</v-card-subtitle
        >
        <v-card-text class="px-0 py-0 mb-4" v-html="lineageHtml"></v-card-text>

        <div class="d-flex align-end gc-2 mb-4">
          <v-card-subtitle class="pb-0 opacity-100 font-weight-bold"
            >Subtree</v-card-subtitle
          >
          <v-card-text class="px-0 py-0 text-caption text-disabled">
            *Subtrees are not shown for single nodes
          </v-card-text>
        </div>
        <!-- NODE SUBTREE SANKEY DIAGRAM -->
        <TaxoView
          :rawData="nodeDetails.subtreeDataTsv"
          :taxaLimit="config.taxaLimit"
          :colorScheme="config.colorScheme"
          :minThresholdMode="config.minCladeReadsMode"
          :minThreshold="config.minCladeReads"
          :figureHeight="config.figureHeight"
          :labelOption="config.labelOption === 'proportion' ? 1 : 0"
          :showAll="config.showAll"
          :marginBottom="config.marginBottom"
          :marginRight="config.marginRight"
          :nodeWidth="config.nodeWidth"
          :nodePadding="config.nodePadding"
          :nodeLabelFontSize="config.nodeLabelFontSize"
          :nodeValueFontSize="config.nodeValueFontSize"
          :rankLabelFontSize="config.rankLabelFontSize"
          :ranksToShow="nodeDetails.rankList"
          ref="taxoview-dialog"
        />
      </v-card-item>

      <!-- Floating Action Button -->
      <div class="fab-container d-flex align-center gc-1 mb-6">
        <SankeyDownloadMenu
          :taxonId="nodeDetails.data.taxon_id"
          :menuLocation="'top center'"
          @format-selected="downloadSubtreeSankey"
          v-if="nodeDetails.hasSourceLinks"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="$download"
              size="x-small"
              rounded="circle"
            >
            </v-btn>
          </template>
        </SankeyDownloadMenu>

        <ExtractReadsDialog
          :taxonId="nodeDetails.data.taxon_id"
          :menuLocation="'top center'"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              extended
              prepend-icon="$fileExport"
              text="Extract"
              color="secondary"
              rounded
            >
            </v-btn>
          </template>
        </ExtractReadsDialog>

        <ConfigureSankeyMenu
          :maxTaxaLimit="roundedMaxTaxaLimit"
          :menuLocation="'top end'"
          v-model:show-all="config.showAll"
          v-model:color-scheme="config.colorScheme"
          v-model:min-clade-reads-mode="config.minCladeReadsMode"
          v-model:min-clade-reads="config.minCladeReads"
          v-model:taxa-limit="config.taxaLimit"
          v-model:figure-height="config.figureHeight"
          v-model:label-option="config.labelOption"
          v-model:margin-bottom="config.marginBottom"
          v-model:margin-right="config.marginRight"
          v-model:node-width="config.nodeWidth"
          v-model:node-padding="config.nodePadding"
          v-model:node-label-font-size="config.nodeLabelFontSize"
          v-model:node-value-font-size="config.nodeValueFontSize"
          v-model:rank-label-font-size="config.rankLabelFontSize"
          :isSubtree="true"
        >
          <template v-slot:activator="{ props }">
            <v-btn color="indigo" rounded="xl" v-bind="props"
              >Configure Diagram</v-btn
            >
          </template>
        </ConfigureSankeyMenu>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import ExtractReadsDialog from "@/components/results-page/ExtractReadsDialog.vue";
import ConfigureSankeyMenu from "@/components/results-page/ConfigureSankeyMenu.vue";
import { v4 as uuidv4 } from "uuid";
import { getRankColor } from "@/plugins/rankUtils";
import SankeyDownloadMenu from "@/components/results-page/SankeyDownloadMenu.vue";
import { exportSankeyDiagram } from "@/plugins/downloadUtils";

export default {
  name: "SankeyNodeDialog",
  components: {
    SankeyDownloadMenu,
    ExtractReadsDialog,
    ConfigureSankeyMenu,
  },
  props: {
    nodeDetails: {
      type: Object,
      required: true,
    },
    configureMenuSettings: {
      type: Object,
      required: true,
      default: () => ({
        showAll: false,
        taxaLimit: 10,
        minCladeReadsMode: 1,
        minCladeReads: 0.01,
        figureHeight: 500,
        labelOption: "proportion",
        marginBottom: 50,
        marginRight: 150,
        nodeWidth: 20,
        nodePadding: 13,
        nodeLabelFontSize: 10,
        nodeValueFontSize: 10,
        rankLabelFontSize: 14,
        colorScheme: [
          "#C14C32", // dark red
          "#506432", // dark green
          "#FFCD73", // yellow
          "#6C3400", // light brown
        ],
      }),
    },
  },
  data() {
    return {
      sankeyId: "subtree-sankey-svg",
      uniqueInstanceId: "",
      config: {
        maxTaxaLimit: 100,
        showAll: false,
        taxaLimit: 10,
        minCladeReadsMode: 1,
        minCladeReads: 0.01,
        figureHeight: 500,
        labelOption: "proportion",
        marginBottom: 50,
        marginRight: 150,
        nodeWidth: 20,
        nodePadding: 13,
        nodeLabelFontSize: 10,
        nodeValueFontSize: 10,
        rankLabelFontSize: 14,
        colorScheme: [
          "#57291F",
          "#C0413B",
          "#D77B5F",
          "#FF9200",
          "#FFCD73",
          "#F7E5BF",
          "#C87505",
          "#F18E3F",
          "#E59579",
          "#C14C32",
          "#80003A",
          "#506432",
          "#FFC500",
          "#B30019",
          "#EC410B",
          "#E63400",
          "#8CB5B5",
          "#6C3400",
          "#FFA400",
          "#41222A",
          "#FFB27B",
          "#FFCD87",
          "#BC7576",
        ],
      },
    };
  },
  computed: {
    roundedMaxTaxaLimit() {
      // Round up maxTaxaLimit to the nearest increment of 5
      return Math.ceil(this.config.maxTaxaLimit / 5) * 5;
    },
    lineageHtml() {
      return this.nodeDetails.data.lineage
        .map(
          (n) =>
            `<a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${n.taxon_id}" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-blue-darken-2">${n.name} (${n.rank})</a>`,
        )
        .join(" » ");
    },
  },
  methods: {
    // Configuration Menu
    updateConfigureMenu(sankeyData) {
      if (sankeyData) {
        this.config.maxTaxaLimit = Math.ceil(sankeyData.maxTaxaPerRank / 5) * 5;
      }
    },

    // Sankey Diagram
    updateSettings(newSettings) {
      this.$emit("update-config", {
        ...newSettings,
      });
    },

    // Sankey Download Functions
    downloadSubtreeSankey(downloadDetails) {
      const { format, filename } = downloadDetails;
      const svg = this.$refs["taxoview-dialog"].$el.querySelector("svg");
      exportSankeyDiagram({ sankeySvgElement: svg, format, filename });
    },

    // Get color for rank chip
    getRankColor, // Imported from colorUtils
  },

  mounted() {
    this.uniqueInstanceId = uuidv4();
    Object.assign(this.config, this.$props.configureMenuSettings);
  },
};
</script>

<style scoped>
/* Node Summary */
.summary .v-card-subtitle {
  margin-bottom: 8px;
}

.summary .v-card-text {
  padding-top: 3px;
  padding-inline: 0px;
  font-weight: 500;
}

.button-text-right {
  justify-content: flex-end !important;
}

/* Floating Action Button Container */
.fab-container {
  position: fixed;
  bottom: 16px;
  right: 30px;
}
</style>
