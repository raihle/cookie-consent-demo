<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  render(h) {
    const matcher = /\$\{(\w+)\|([^}]+)}/g;
    let currentMatch;
    let currentIndex = 0;
    let content = [];
    while ((currentMatch = matcher.exec(this.text)) !== null) {
      content.push(
        h("span", this.text.substring(currentIndex, currentMatch.index))
      );
      content.push(
        this.$scopedSlots[currentMatch[1]]({ text: currentMatch[2] })
      );
      currentIndex = matcher.lastIndex;
    }
    content.push(h("span", this.text.substring(currentIndex)));
    return h("div", content);
  }
};
</script>
