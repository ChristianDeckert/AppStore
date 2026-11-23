# Privacy Policy — My Music

**Last updated: 23 November 2026**

## The short version

My Music collects nothing and has no servers of its own. Your music stays on your device. When you
search for a cover, your search term is sent to Apple's iTunes Search service. Purchases go through
Apple's App Store. There are no ads, no analytics, no accounts and no tracking.

## Your music files

My Music plays the audio and video files you put into its folder on your device. That folder is the app's
own Documents folder, which you can also see and change in the Files app under **On My iPhone ›
My Music** (or On My iPad) and in Finder or the Apple Devices app when your device is connected to
a computer. My Music reads a file from elsewhere only when you import it or open it in My Music;
it is then copied into that folder.

When you edit a song's details or cover, My Music writes them into the song file itself, on your
device.

## What My Music stores on your device

Besides your music, My Music keeps a few files of its own, in its private storage on the device:

- **A library index:** the tags, durations and cover references read from your files, so the
  library opens quickly. It can be rebuilt from your files at any time.
- **Your user data** (`userdata.json`): favourites, play counts and recently played songs, and your
  playlists, plus a backup copy of the previous version of this file.
- **Covers:** downscaled copies of your songs' covers, used for display.
- **Preferences:** sort order and list or grid choice per folder, your last move destination, recent
  searches and the chosen visualizer.
- **Playback state:** the song you were listening to, its position and the queue, so My Music can
  pick up where you left off.
- **Premium status:** whether Premium is active, derived from the purchase information StoreKit
  provides on your device.

If iCloud Backup is on, this data may be included in your own device backup, which only you can
reach. It is never sent to us. **Clear listening history** and **Clear recent searches** in Settings
remove that data; deleting the app removes all of it, including your music.

## Network

My Music has two network connections: the cover search, and in-app purchases through Apple's App
Store.

**Cover search.** When you open **Update artwork…** on a song or folder, the search field is
filled in with the song's artist and album (or its title), or the folder's name, and My Music
searches for it right away, and again whenever you edit the field.
Each search sends that search term to Apple's iTunes Search API (itunes.apple.com) and loads the
matching covers from Apple. When you choose a cover, the large image is downloaded from Apple too.
Like any internet request, this includes your device's IP address. Nothing else is sent: no
account, no identifier and no other information about your library. Apple's privacy policy
applies: https://www.apple.com/legal/privacy/

**In-app purchases.** Premium is an Apple in-app purchase. Buying it, restoring it and checking
whether it is active go through Apple's App Store with StoreKit, Apple's purchase framework. Apple
processes the payment and keeps the purchase record under your Apple Account; My Music receives no
payment details, name or e-mail address, only whether Premium is active. Apple's privacy policy
applies here too.

My Music has no analytics, no crash reporting of its own, no advertising and no update checks.
Playback, browsing, search and editing all work offline.

## Photos and Files

When you choose a cover from **Photos**, My Music uses the system photo picker. The picker runs
outside the app, so My Music does not ask for access to your photo library and never sees it; it
receives only the one image you pick. Choosing a cover from **Files** works the same way: My Music
receives only the file you pick.

## Sharing

When you share a song, folder or playlist, My Music hands the files to the system share sheet.
They go only where you send them, for example via AirDrop, Messages or Mail. A folder is packed into
a temporary zip file for this, which is deleted the next time you share or open the app.

## Data collection

None. My Music has no account, no sign-in, no analytics, no advertising and no tracking, and it
does not share data with data brokers. Purchase records are held by Apple; the app stores only
whether Premium is active. Its App Store privacy declaration is "Data Not Collected".

## Children

My Music is rated 4+ and collects nothing from anyone, of any age. The cover search sends only the
search term, as described above.

## Changes

If this policy ever changes, the updated version will be published at this address with a new
"last updated" date.

## Contact

Questions about this policy: open an issue at https://github.com/ChristianDeckert/AppStore/issues.
