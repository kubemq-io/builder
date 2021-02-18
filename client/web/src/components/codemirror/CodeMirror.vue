<template>
  <v-container>
    <codemirror :value="configToShow" :options="cmOption" />
    <!--      @cursorActivity="onCmCursorActivity"-->
    <!--      @ready="onCmReady"-->
    <!--      @focus="onCmFocus"-->
    <!--      @blur="onCmBlur"-->
  </v-container>
</template>

<script>
import { codemirror } from "vue-codemirror";

// base style
import "codemirror/lib/codemirror.css";

// theme css
import "codemirror/theme/base16-dark.css";

// language
import "codemirror/mode/vue/vue.js";

// active-line.js
import "codemirror/addon/selection/active-line.js";

// styleSelectedText
import "codemirror/addon/selection/mark-selection.js";
import "codemirror/addon/search/searchcursor.js";

// highlightSelectionMatches
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/match-highlighter.js";

// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/sublime.js";

// foldGutter
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";
import { mapGetters } from "vuex";
export default {
  name: "CodeMirror",
  title: "Mode: text/x-vue & Theme: base16-dark",
  components: {
    codemirror
  },
  data() {
    return {
      cmOption: {
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: false,
        lineNumbers: true,
        line: false,
        keyMap: "sublime",
        mode: {
          name: "javascript",
          json: true
        },
        theme: "yeti",
        extraKeys: {
          F11(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          },
          Esc(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
          }
        }
      }
    };
  },
  created() {
    this.code = this.$store.state.codeMirror.code;
  },

  methods: {
    // onCmCursorActivity(codemirror) {
    //   //     console.debug("onCmCursorActivity", codemirror);
    // },
    // onCmReady(codemirror) {
    //   //     console.debug("onCmReady", codemirror);
    // },
    // onCmFocus(codemirror) {
    //   //    console.debug("onCmFocus", codemirror);
    // },
    // onCmBlur(codemirror) {
    //   //      console.debug("onCmBlur", codemirror);
    // }
  },
  computed: {
    ...mapGetters({
      configFromStore: "currentCode"
    }),
    configToShow: {
      get() {
        return this.configFromStore;
      },
      set(newConfig) {
        return newConfig;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.example {
  display: flex;
  height: 100%;

  .codemirror,
  .pre {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: auto;
  }

  .pre {
    display: block;
    padding: 1rem;
    //font-size: $font-size-small;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
