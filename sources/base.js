export default {
  methods: {
    stop: function(){
      this.xtag.interval = clearInterval(this.xtag.interval);
    },
    update: function(){
      this.textContent = new Date().toLocaleTimeString();
    }
  }
}