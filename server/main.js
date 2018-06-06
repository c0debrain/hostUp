import { Meteor } from 'meteor/meteor';

import { URLToCheck } from '../imports/api/urlsToCheck.js';
import { HostStatus } from '../imports/api/hostStatus.js';
import shelljs from 'shelljs';
import { log } from 'shelljs/src/common';

Meteor.startup(() => {
  // code to run on server at startup
  // try {
  //   let msgSettings = MessagingSettings.findOne({ active: true });
  //   if (typeof msgSettings == 'undefined' || msgSettings == null || msgSettings == "") {
  //     // msg settings not set, route user to setup for message settings.
  //     // console.log("Didn't find email settings.");
  //   } else {
  //       // console.log("Found email settings");
  //       let user = msgSettings.emailUser;
  //       // console.log("User = " + user);
  //       Meteor.call('setEmailFromServer', msgSettings);
  //   }
  // } catch (error) {
  //     console.log("Error caught in server/main.js: " + error);
  // }

  console.log("Server starting - should be headed to checkURLsRepeat() function.");
  
  checkURLsRepeat();
});

// Meteor.methods({
//   'setEmailFromServer' (msgSettings) {
//       if (msgSettings) {
//           smtp = {
//               username: msgSettings.emailUser,
//               password: msgSettings.emailPasswd,
//               server: msgSettings.smtpSrvUrl,
//               port: msgSettings.smtpPort
//           }

//           process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
//       }
//   },
// });
