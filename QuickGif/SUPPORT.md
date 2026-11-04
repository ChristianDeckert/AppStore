# Quick Gif — Support

Quick Gif is a macOS menu-bar utility that turns a video into an animated GIF in one drag.
Everything happens on your Mac. This page covers how to use it, common questions, and how to
reach us.

## Getting started

1. Launch Quick Gif. It has no Dock icon and no main window; look for the small rounded **GIF**
   badge at the right-hand end of the menu bar.
2. Click the badge and choose **Show Window** to open the converter panel.
3. Drag a video onto the panel, or click **Choose File…** inside it (also **Convert File…** in
   the menu). You can drop several files at once; they convert one after another.
4. The finished GIF is saved to your **Downloads** folder and a preview window opens. From
   there you can drag the GIF into any app, use **Save As…** to put a copy somewhere else, or
   **Show in Finder**.

Press **Escape** to hide the panel. It never takes focus away from the app you were using.

## The hot corner

Rest the pointer in the **bottom-left corner** of the screen for a moment and the panel slides
in; move away before it commits and it slides back out. Pick a different corner, or switch the
feature off, under **Settings… → Showing the Panel**. This is Quick Gif's own pointer watching,
independent of the macOS hot corners in System Settings, which keep working as before.

## Quality and size

- The **S / M / L / XL** picker on the panel sets frame rate, maximum size and palette in one
  tap. M is the default.
- **Settings… → Conversion** exposes the individual controls: frame rate, the maximum width and
  height the GIF must fit inside (sources are never upscaled), the number of palette colours,
  two-pass palette generation, and looping.
- A different output folder can be chosen under **Settings… → Output**.

## Credits and purchases

- A fresh install includes **25 free conversions**. Each successful conversion uses one credit;
  a failed or cancelled conversion costs nothing. The current balance is shown on the panel and
  in the menu.
- When the balance reaches zero you can buy a pack of **100 Credits** or a one-time
  **Lifetime Unlock** for unlimited conversions. Both are Apple in-app purchases, handled by
  the App Store; Quick Gif has no account of its own.
- Reinstalled or on a new Mac? Choose **Restore Purchases** from the menu bar or under
  **Settings… → Purchases** to bring back a Lifetime Unlock. Credit packs are consumed where they
  were bought and are not restorable, as is standard for consumable purchases.
- Refunds are handled by Apple at https://reportaproblem.apple.com.

## Supported input

Video files macOS can decode — including `.mp4`, `.mov` and `.m4v` — plus `.gif`, `.png` and
`.jpg` images. Screen recordings from macOS or the iOS Simulator work directly.

## Troubleshooting

- **Nothing appeared after launch.** That is expected: find the GIF badge in the menu bar. If
  the menu bar is crowded, items at the left of the right-hand group may be hidden by the
  notch; quit another menu-bar app or use a wider display.
- **"Conversion Failed".** Open **Show Log** from the menu bar or from Settings. The log records
  each file, the settings used, and the converter's own messages, which usually name the cause
  (an unsupported codec, a file that moved, a full disk).
- **The GIF is larger than expected.** Choose a smaller preset, lower the frame rate, or reduce
  the maximum size under Settings… → Conversion. GIF is an old format; a few seconds at 720 px
  can be several megabytes.
- **The panel does not appear at the corner.** Check that a corner is selected under
  Settings… → Showing the Panel and that the pointer rests fully in the corner for a moment.

## Privacy

Quick Gif collects no data and has no servers. Its only network connection is to Apple's App
Store for purchases. Full details: [Privacy policy](PRIVACY.md).

## Requirements and acknowledgements

Quick Gif requires macOS 15 or later and runs natively on Apple silicon and Intel Macs.
Conversion uses FFmpeg under the GNU LGPL v2.1 or later; the licence text, build information
and a link to the source are in the app under **Settings… → About → Acknowledgements…**.

## Contact

Found a bug, or something on this page did not answer your question? Open an issue at
https://github.com/ChristianDeckert/AppStore/issues, with the macOS version and, if it is about
a failed conversion, the relevant lines from the log window.
