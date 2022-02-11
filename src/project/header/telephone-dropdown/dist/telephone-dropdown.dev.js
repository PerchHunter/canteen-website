// Назначаем обработчики onmouseover/out на элементе. Также можно было бы использовать onmouseenter/leave, но они менее универсальны и не сработают с делегированием.
// Когда курсор переходит на элемент, начинаем измерять скорость его движения, используя mousemove.
// Если скорость низкая, то вызываем over.
// Когда мы выходим из элемента, если запускали over, вызываем out.
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $elem = document.getElementsByClassName("chapter_telephone")[0];
var $page = document.getElementsByClassName("page")[0];

var HoverIntent =
/*#__PURE__*/
function () {
  function HoverIntent(sensitivity, // скорость ниже 0.1px/ms значит "курсор на элементе"
  interval, // измеряю скорость каждые 100ms
  $elem, over, out) {
    _classCallCheck(this, HoverIntent);

    this.sensitivity = sensitivity;
    this.interval = interval;
    this.$elem = $elem;
    this.over = over;
    this.out = out; // привяжем "this" для обработчиков.

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this); // и в функции, измеряющей время (вызываемой из setInterval)

    this.trackSpeed = this.trackSpeed.bind(this);
    $elem.addEventListener("mouseover", this.onMouseOver);
    $elem.addEventListener("mouseout", this.onMouseOut);
  }

  _createClass(HoverIntent, [{
    key: "onMouseOver",
    value: function onMouseOver(event) {
      if (this.isOverElement) {
        // Игнорируем событие над элементом,
        // так как мы уже измеряем скорость
        return;
      }

      this.isOverElement = true; // после каждого движения измеряем дистанцию
      // между предыдущими и текущими координатами курсора
      // если скорость меньше sensivity, то она считается медленной

      this.prevX = event.pageX;
      this.prevY = event.pageY;
      this.prevTime = Date.now();
      $elem.addEventListener("mousemove", this.onMouseMove);
      this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval);
      this.over;
    }
  }, {
    key: "onMouseOut",
    value: function onMouseOut(event) {
      // если ушли с элемента
      if (!event.relatedTarget || !$elem.contains(event.relatedTarget)) {
        this.isOverElement = false;
        this.$elem.removeEventListener("mousemove", this.onMouseMove);
        clearInterval(this.checkSpeedInterval);

        if (this.isHover) {
          // если была остановка движения на элементе
          this.out.call(this.$elem, event);
          this.isHover = false;
        }
      }

      this.out;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      this.lastX = event.pageX;
      this.lastY = event.pageY;
      this.lastTime = Date.now();
    }
  }, {
    key: "trackSpeed",
    value: function trackSpeed() {
      var speed;

      if (!this.lastTime || this.lastTime == this.prevTime) {
        // курсор не двигался
        speed = 0;
      } else {
        speed = Math.sqrt(Math.pow(this.prevX - this.lastX, 2) + Math.pow(this.prevY - this.lastY, 2)) / (this.lastTime - this.prevTime);
      }

      if (speed < this.sensitivity) {
        clearInterval(this.checkSpeedInterval);
        this.isHover = true;
        this.over.call(this.$elem);
      } else {
        // скорость высокая, запоминаем новые координаты
        this.prevX = this.lastX;
        this.prevY = this.lastY;
        this.prevTime = this.lastTime;
      }
    }
  }]);

  return HoverIntent;
}();

var deleteDropdown = function deleteDropdown() {
  $elem.lastElementChild.style.opacity = 0;
  setTimeout($elem.lastElementChild.style.zIndex = -1, 10);
};

var over = function over() {
  $elem.lastElementChild.style.zIndex = 2;
  setTimeout($elem.lastElementChild.style.opacity = 1, 10);
  $page.style.filter = "brightness(0.5)";
};

var out = function out() {
  $elem.lastElementChild.style.opacity = 0;
  setTimeout($elem.lastElementChild.style.zIndex = -1, 10);
  $page.style.filter = "none";
};

new HoverIntent(0.1, 100, $elem, over, out);