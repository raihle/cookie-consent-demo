<script>
export default {
  functional: true,
  props: {
    requiredConsentLevel: {
      type: Number,
      required: true
    },
    consentLevel: {
      type: Number,
      required: true
    }
  },
  render(h, context) {
    return wrapIfNecessary(h, selectSlotToRender(context));
  }
};

function selectSlotToRender(context) {
  if (context.props.consentLevel >= context.props.requiredConsentLevel) {
    return context.slots().default;
  } else {
    return context.slots().fallback;
  }
}

function wrapIfNecessary(h, content) {
  if (content.length === 1) {
    return content[0];
  } else {
    return h("div", content);
  }
}
</script>
