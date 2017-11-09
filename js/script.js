// 111111111111111111

var user = {};
user.name = 'Cris';
console.log(user);
user.surname = 'Simons';
console.log(user);
user.name ='Brain';
console.log(user);
delete user.name;
console.log(user);

// 111111111111111111


// 2222222222222222222

var car = {};
car.model = 'Lada';
car.speed = 40;
car.run = function() {
    console.log(this.model + ' едет со скоростью ' + this.speed);
};
car.stop = function() {
    console.log(this.model + ' остановилась');
    this.speed = 0;
};

var car2 = {};
car2['model'] = 'BMW';
car2['speed'] = 60;
car2['run'] = function() {
    console.log(this.model + ' едет со скоростью ' + this.speed);
};
car2['stop'] = function() {
    console.log(this.model + ' остановилась');
    this.speed = 0;
};

var car3 = {
    model: 'Audi',
    speed: 80,
    run: function () {
        console.log(this.model + ' едет со скоростью ' + this.speed);
    },
    stop: function () {
        console.log(this.model + ' остановилась');
        this.speed = 0;
    }
};

// 2222222222222222222


// 3333333333333333333

var tv = {
  currentChannel : 1,

  nextChannel : function() {
      if(this.currentChannel <= 100) {
          this.currentChannel += 1;
      }
  },

  previousChannel : function() {
      if(this.currentChannel > 1) {
          this.currentChannel -= 1;
      }
  },

  setChannel : function(channel) {
      if(channel > 1 && channel <= 100) {
          this.currentChannel = channel;
      }
  }
};

// 3333333333333333333

// 4444444444444444444

var player = {
    off: true,
    on: false,
    music: ['firstSong', 'secondSong', 'thirdSong', 'fourthSong'],
    currentSongIndex : 0,
    currentSong: 'firstSong',
    switсhOn: function () {
        if(this.off === true) {
            this.off = false;
            this.on = true;
        } else {
            this.off = true;
            this.on = false;
        }
    },
    nextSong: function() {
        if(this.currentSongIndex < this.music.length - 1) {
            this.currentSongIndex += 1;
            this.currentSong = this.music[this.currentSongIndex];
        }
    },
    previousSong: function() {
        if(this.currentSongIndex > 0) {
            this.currentSongIndex -= 1;
            this.currentSong = this.music[this.currentSongIndex];
        }
    },
    setCurrentSong: function(index) {
        if(this.music[index] !== undefined) {
            this.currentSongIndex = index;
            this.currentSong = this.music[this.currentSongIndex];
        }
    }
};


// 4444444444444444444

// 5555555555555555555

var developers = [
    {
        name: 'John',
        age: 28,
        experience: 1,
        languages: ['java', 'javaScript', 'sql']
    },
    {
        name: 'Bill',
        age: 30,
        experience: 5,
        languages: ['html', 'css', 'javaScript']
    },
    {
        name: 'Mike',
        age: 32,
        experience: 4,
        languages: ['python', 'sql']
    }
];


// 5555555555555555555

// 6666666666666666666

var object = {key: 'value', key2: 'value2'};

function isEmpty(obj) {
    for(var key in obj) {
        if(key in obj) {
            return true;
        }
    }

    return false;
}


// 6666666666666666666

// 7777777777777777777

var salaries = {
    Cris: 300,
    John: 200,
    Bill: 100,
    Tom: 400,
    Vasya: 2000
};

function checkAverageSalary (obj) {
    var sumOfSalaries = 0,
        persons = 0,
        result;

    for(var key in obj) {
        sumOfSalaries += obj[key];
        persons += 1;
    }

    result = sumOfSalaries / persons;

    return result;
}

// 7777777777777777777

