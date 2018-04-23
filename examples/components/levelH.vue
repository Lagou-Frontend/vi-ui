<script>
export default {
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      actualLevel: this.level > 6 ? 6 : this.level
    }
  },
  render(h) {
    return h(`h${this.actualLevel}`, this.$slots.default)
  }
}
</script>