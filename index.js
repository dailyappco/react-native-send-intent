/**
 * @providesModule SendIntentAndroid
 */

"use strict";

var { Platform, NativeModules } = require("react-native");
var RNSendIntentAndroid = NativeModules.SendIntentAndroid;

var SendIntentAndroid = {
    TEXT_PLAIN: Platform.OS === "android" ? RNSendIntentAndroid.TEXT_PLAIN : "text/plain",
    TEXT_HTML: Platform.OS === "android" ? RNSendIntentAndroid.TEXT_HTML : "text/html",
    sendText(config) {
        if ("title" in config && config.title != null && config.title.length > 0) {
            RNSendIntentAndroid.sendTextWithTitle(config.title, config.text, config.type || "text/plain");
        } else {
            RNSendIntentAndroid.sendText(config.text, config.type || "text/plain");
        }
    },
    sendPhoneCall(phoneNumber) {
        RNSendIntentAndroid.sendPhoneCall(phoneNumber);
    },
    sendPhoneDial(phoneNumber) {
        RNSendIntentAndroid.sendPhoneDial(phoneNumber);
    },
    sendSms(phoneNumber, body) {
        RNSendIntentAndroid.sendSms(phoneNumber, body || null);
    },
    addCalendarEvent(config) {
        RNSendIntentAndroid.addCalendarEvent(
            config.title,
            config.description,
            config.startDate,
            config.endDate,
            config.recurrence,
            config.location,
            config.isAllDay || false
        );
    },
    isAppInstalled(packageName) {
        return RNSendIntentAndroid.isAppInstalled(packageName);
    },
    installRemoteApp(uri, saveAs) {
        return RNSendIntentAndroid.installRemoteApp(uri, saveAs);
    },
    openCalendar() {
        RNSendIntentAndroid.openCalendar();
    },
    sendMail(mail, subject, body) {
        RNSendIntentAndroid.sendMail(mail, subject || "", body || "");
    },
    openChooserWithOptions(options: Object, title: string) {
        RNSendIntentAndroid.openChooserWithOptions(options, title);
    },
    openMaps(query) {
        RNSendIntentAndroid.openMaps(query);
    },
    openCamera() {
        RNSendIntentAndroid.openCamera();
    },
    openMapsWithRoute(query, mode) {
        RNSendIntentAndroid.openMapsWithRoute(query, mode);
    },
    shareTextToLine(options: Object) {
        RNSendIntentAndroid.shareTextToLine(options);
    },
    shareImageToWhatsapp(text, mediaPath) {
        RNSendIntentAndroid.shareImageToWhatsapp(text, mediaPath);
    },
    shareImageToInstagram(type, mediaPath) {
        RNSendIntentAndroid.shareImageToInstagram(type, mediaPath);
    },
    openSettings(settingsName) {
        RNSendIntentAndroid.openSettings(settingsName);
    },
    getVoiceMailNumber() {
        return RNSendIntentAndroid.getVoiceMailNumber();
    },
    openApp(packageName, extras) {
        return RNSendIntentAndroid.openApp(packageName, extras || {});
    },
    /** Creates an ACTION_VIEW Intent for the given package with the given data, optional mimetype and extras.
     *  The extras are an object containing String, or other objects of the following format:
     * { type: "int", value: 4 }
     * Other possible types are int, short, byte, char, long and float.
     */
    openAppWithData(packageName, dataUri, mimeType, extras) {
        return RNSendIntentAndroid.openAppWithData(packageName, dataUri, mimeType, extras || {});
    },
};

module.exports = SendIntentAndroid;
