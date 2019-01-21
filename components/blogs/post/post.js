(function() {
  function qsa(sel) {
    return Array.apply(null, document.querySelectorAll(sel));
  }
  qsa(".code-pad").forEach(function (editorEl) {
    var cm = CodeMirror.fromTextArea(editorEl, {
      mode: "python",
      lineNumbers: true,
      matchBrackets: true,
      readOnly: true,
      lineWiseCopyCut: true
    });
    cm.setSize(null, 100);
  });
})();
