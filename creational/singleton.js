class Settings {
  constructor(optionValue) {
    if (Settings.exists) {
      return Settings.instance;
    }
    this._option = optionValue;
    Settings.instance = this;
    Settings.exists = true;
    return this;
  }

  getOption() {
    return this._option;
  }

  setOption(option) {
    this._option = option;
  }
}

const options1 = new Settings("Option1");
console.log(options1.getOption());

const options2 = new Settings("Option2");
console.log(options2.getOption());

