angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Alee Blanco',
    lastText: 'Jane hay que ir a Caribes!!',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11903744_969835643076089_7687451260271482216_n.jpg?oh=9bf31663cb00c9a1a370a27a8da83afd&oe=56A424CB'
  }, {
    id: 1,
    name: 'Arlene Mota',
    lastText: 'Janeth vas a venir al servicio? Estoy solaa :(',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/11032009_867311453325591_6627955685407829598_n.jpg?oh=047593897ee1bb6d3ef07d4e11838c96&oe=566A5AD0'
  }, {
    id: 2,
    name: 'Arely Valdes',
    lastText: 'Me quede dormida jaja',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11390310_10202942223316124_6761803190300081432_n.jpg?oh=10ee16f8240f0d80d8d2b953d65e148a&oe=5664E99D'
  }, {
    id: 3,
    name: 'Cesar Izaguirre',
    lastText: '♥',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/13789_841867799239325_7630754212532353935_n.jpg?oh=323a75cae43e2943f54328c4b08e0bb6&oe=5674F1B3'
  }, {
    id: 4,
    name: 'Fernando Alonso',
    lastText: 'Dile a tu amiga que me agregue',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10001339_10152258644328468_1806898110_n.jpg?oh=e524a7d78072a143c85ed8d2ae49d0d5&oe=566827BC'
  }, {
    id: 5,
    name: 'Mike Harrington',
    lastText: 'Hola como estas?',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
