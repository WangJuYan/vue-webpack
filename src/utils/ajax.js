function getData () {
  $.ajax({
      url: 'http://localhost:3001/agents',
      method: 'get',
      data: '',
      success: function (res) {
        console.log('success:', res);
      },
      error: function (err) {
        console.log(err);
      }
    });
}

export default {
  getData: getData
}