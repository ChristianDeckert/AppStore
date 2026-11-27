# CRTCam — Support

CRTCam photographs CRT TVs and monitors without the dark bands a normal phone photo shows. It
syncs the camera's shutter to the screen's refresh rate, so every line of the picture is lit
exactly once. There is no account. This page covers how the app works, common questions, and how to
reach us.

## Why the bands appear

A CRT draws its picture line by line, 50 to 120 times a second, and each line glows only briefly.
A phone photo with a short shutter catches the screen half-drawn, so dark bands cross it. CRTCam
keeps the shutter open for exactly one refresh, or a whole number of them, so the screen is
drawn completely during the exposure.

## Taking a photo

1. Turn the screen on and fill most of the frame with it.
2. Hold still, or put the phone on a stand.
3. Tap **Detect**, or pick the rate you know.
4. Turn the knob, or press a volume button.
5. Fold the controls with the grabber for a clear view of the frame.

The first time you open CRTCam, a short guide explains this. You can open it again under
**Settings › Show the guide**.

## The camera screen

- **The picture** fills the width of the screen and shows exactly what the photo will contain. Tap
  it to focus on that spot. A swipe down folds the controls, a swipe up unfolds them.
- **The status pill** at the top left shows what the shutter is synced to, for example
  "SYNCED 50.00 Hz" and the shutter time. Tap it for the sync details, where you can detect again
  or fine-tune. While CRTCam is detecting, tapping it cancels.
- **The gear** at the top right opens Settings. Without Premium, a **star** next to it shows what
  Premium adds.
- **The rate keys** pick a preset: 50 Hz PAL, 59.94 Hz NTSC, and common VGA and VESA monitor rates.
- **Detect** measures the screen's refresh rate; see below.
- **The knob** takes the photo. The volume buttons do too, and on iPhones with a Camera Control
  button, so does that.
- **The print** at the left shows your last photo and opens your photos.
- **The lens keys** (for example 0.5×, 1× and 2×) switch between the back cameras your phone has.
- **The grabber** folds the controls down to the knob and the print, for a clear view of the
  whole frame. The choice is remembered.

## Detect and fine-tuning

Tap **Detect** and hold the phone still, pointed at the lit screen. CRTCam samples the flicker in
three passes at different frame rates, checks the rates the flicker suggests, and locks onto the
one where the banding disappears. It finds rates from 45 to 165 Hz.

**Fine-tuning** then tries shutter times around the detected rate and keeps the one that leaves the
least banding. It takes a few seconds longer and is on by default; turn it off under **Settings ›
Fine-tune after detecting**. You can also fine-tune later from the sync details.

If you know the rate, picking it is quicker: most European TVs run at 50 Hz, most American and
Japanese ones at 59.94 Hz, and computer monitors at 60 to 85 Hz or more.

## Your photos

Your photos stay in CRTCam until you export them: they are not added to your photo library on their
own. Tap the print on the camera screen to see them all. Tap a photo to view it full screen, where
you can mark it as a favourite (the heart), see the rate and shutter it was taken with (the details
button), export it or delete it.

## Exporting

Open a photo and tap **Export**.

- **Save to Photos** adds the full-resolution photo to your photo library. This needs Premium.
- **AirDrop & share** (on Android: **Share**) sends the photo with the system share sheet, for
  example via AirDrop, Messages or Mail. Without Premium, CRTCam shares a smaller copy, 1280 pixels
  on the long side, with a watermark. With Premium it shares the original.

## Free and Premium

- Everything for taking photos is free: sync, Detect, fine-tuning, all lenses and your full-size
  photos in the app.
- **Premium** is a one-time in-app purchase. There is no subscription. It adds:
  - **Save to Photos** at full resolution;
  - sharing the original photo, without the watermark;
  - viewing your photos without the watermark pattern.
- Without Premium, the full-screen photo view shows a faint pattern of retro icons over the photo.
  It is only drawn on screen; the photo itself is unchanged, and buying Premium removes the pattern
  for every photo, including the ones you took before.
- Tap the **star** on the camera screen to see Premium and its price. **Restore purchases** is on
  the same page and in Settings.
- Purchases are Apple in-app purchases, handled by the App Store; CRTCam has no account of its own.
  If you bought Premium on another device, it comes back through your Apple Account.
- Refunds are handled by Apple at https://reportaproblem.apple.com.
- On Android, Premium is not available yet.

## No CRT at hand?

The [CRT test screen](https://christiandeckert.github.io/AppStore/CRTCam/simulator/) lets a
computer monitor stand in for a CRT. It is an approximation: a real flicker for the camera needs a
fast monitor (120 Hz or more) that the browser draws at full speed. On a 60 Hz monitor the page can
only show rolling bars, which are drawn into the picture: they show what the effect looks like, but
CRTCam cannot sync them away.

## Troubleshooting

- **A faint thin line remains.** Many phones only offer shutter times of about 1/n s. For an odd
  rate such as 59.46 Hz the nearest step is a little off. Try **Fine-tune** in the sync details.
- **Bands remain.** The rate is probably wrong. Tap **Detect**, or try the other common rate (50 or
  59.94 Hz).
- **Detect finds no lock.** Fill most of the frame with the lit screen, hold still, and avoid
  reflections. A dark or very static picture is harder to measure; a bright, busy picture works
  best. You can always pick a rate by hand.
- **The picture is too bright.** A very bright screen can clip even at the lowest sensitivity. Turn
  down the TV's contrast or brightness.
- **Wavy patterns (moiré).** The screen's phosphor dots and the camera's pixels can interfere. Step
  a little closer or further away, or switch lenses.
- **The camera doesn't start.** CRTCam needs camera access: turn it on in the system Settings under
  **CRTCam › Camera**.
- **Save to Photos fails.** Allow CRTCam to add photos in the system Settings under
  **CRTCam › Photos**.
- **The volume buttons don't take a photo.** They only do while the camera screen is showing.
- **I bought Premium, but CRTCam still shows the star.** Make sure you are signed in to the App
  Store with the Apple Account you bought it with, then tap **Restore purchases** on the Premium
  page or in Settings.
- **On Android, CRTCam says it cannot sync.** Some Android phones don't allow apps to set the
  shutter time; CRTCam cannot sync on them.

## Privacy

CRTCam has no account, no analytics, no advertising and no tracking. Your photos stay on your
device until you export them, and its only network connection is for in-app purchases through
Apple's App Store. Full details: [Privacy policy](PRIVACY.md).

## Requirements

CRTCam requires an iPhone or iPad with iOS 15 or later; the volume buttons and the Camera Control
take photos from iOS 17.2. On Android it requires Android 10 or later and a camera that allows a
manual shutter time. It is available in English.

## Contact

Found a bug, or something on this page did not answer your question? Open an issue at
https://github.com/ChristianDeckert/AppStore/issues, with your phone model and system version and,
if it is about a screen, its make and the rate you used.
