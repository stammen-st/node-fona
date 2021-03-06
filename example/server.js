var zetta = require('zetta');
var SerialDevice = require('zetta-serial-device-driver');
var FonaPhone = require('zetta-fona-phone-serial-driver');
var FonaSMS = require('zetta-fona-sms-serial-driver');
var FonaFMRadio = require('zetta-fona-fm-radio-serial-driver');
var FonaNetwork = require('zetta-fona-network-serial-driver');
var FonaPower = require('zetta-fona-power-serial-driver');
var FonaSIM = require('zetta-fona-sim-serial-driver');
var Fona = require('../index');

zetta()
  .use(SerialDevice, '/dev/cu.usbserial')
  .use(FonaSMS)
  .use(FonaPhone)
  .use(FonaFMRadio)
  .use(FonaNetwork)
  .use(FonaPower)
  .use(FonaSIM)
  .use(Fona)
  .listen(1337);
