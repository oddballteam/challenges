import Component from '@ember/component';

export default Component.extend({
  willRender() {
    fetch('/api/oddballs').then(resp => resp.json()).then(data => {
      this.set('oddballs', data);
    });
  }
});
