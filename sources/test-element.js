export default {
  lifecycle: {
    created: function(){
      this.start();
    }
  },
  methods: {
    start: function(){
      this.update();
      this.xtag.interval = setInterval(this.update.bind(this), 1000);
    }
  },
  events: {
    tap: function(){
      if (this.xtag.interval) 
        this.stop();
      else 
        this.start();
    }
  }
}