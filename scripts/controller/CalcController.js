class CalcController {
  constructor() {
    this._displayCalEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._locale = "pt-BR";
    this._currentDate;
    this.initialize();
  }

  initialize() {
    this.setDisplayDateTime();
    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale);
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayTime() {
    wadddd;
    return this._dateEl.innerHTML;
  }

  set displayTime(value) {
    return (this._dateEl.innerHTML = value);
  }

  get displayDate() {
    return this._timeEl.innerHTML;
  }

  set displayDate(value) {
    return (this._timeEl.innerHTML = value);
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set _currentDate(value) {
    this._currentDate = value;
  }
}
