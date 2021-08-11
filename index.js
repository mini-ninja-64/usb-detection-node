const usbDetect = require("usb-detection");
const chalk = require("chalk");
const monitoringConfig = require("./monitoringConfig");

function logEvent(logOptions, eventName, objToLog) {
  if (logOptions.enabled)
    console.log(
      chalk.bold[logOptions.colour](`\n[${eventName}]:\n`),
      objToLog,
      "\n"
    );
}

usbDetect.startMonitoring();
monitoringConfig.forEach(({ name, logOptions, callback }) =>
  usbDetect.on(name, (device) => {
    logEvent(logOptions, name, device);
    callback(device);
  })
);
