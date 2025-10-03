---
layout: post
title: Using chatGPT to create simple code
date: 2025-08-17 06:33:23
tags: tutorial
categories: tutorial
---

Yesterday, I remembered that I had a Bluesky account that I planned to use to post songs on Last.fm. Previously, I had tried LegatoNowPlaying, but unfortunately, it only supported Misskey, which I strongly disagreed with at the time because there was no Bluesky option.
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/misskey-id-buat-bot-post.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Unfortunately, it turns out that the developer [LegatoNowPlaying](https://github.com/Legato-Dev/Legato-NowPlaying) only provides support for one player, namely [AIMP](https://aimp.ru/), and in the end I couldn't use it for [Spotify](https://open.spotify.com/) and etc.

Finally, it occurred to me about my account at [@scrobble.naturbrilian.dpdns.org](https://bsky.app/profile/scrobble.naturbrilian.dpdns.org) which I created a few months ago. I actually separated this account from my main account, and it only contains playback statuses.

# How do I instruct ChatGPT to create a simple tool?
The way to give commands to chatGPT is very easy. First, I give commands like this, just as if you were chatting with a friend.
```script
I have an account on Bluesky with this username: https://bsky.app/profile/namapengguna.bsky.social. I plan to use this account to post what I'm listening to using the Last.fm API. I've tried tools like LegatoNowPlaying from GitHub, but it only works on Misskey. Do you know of any tools or scripts that currently work?
```

Wait for chatGPT to respond. Usually, chatGPT will respond with recommendations for several tools that you are referring to, but sometimes the answers you receive may not be appropriate. So, try having another conversation as usual, like this
I want to automatically post what I'm listening to, not post top artists every week.
Or more simply, “not a top artist.” Then ChatGPT will respond with “how to create an autopost Now Playing to Bluesky.” The bot will then create a simple Python script. Just follow the instructions, and the bot will create the full version at the same time.

# Setting up your lastfm API
Get your lastfm API from this [links](https://www.last.fm/api/account/create), then click create, several APIs will appear, then copy the API Key there.

http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=USERNAME&api_key=APIKEY&format=json&limit=1
Then, copy the code provided by ChatGPT into your favorite text editor. Here, I am using VSCode.
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/python-script-on-vscode.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Then enter the username and API key you received earlier, then go to Bluesky to get the password.


> ##### NOTE
> 
> The password on Bluesky is not an account password,
> but an application password.
{: .block-note }

# How do you get your app password?
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/apps-password.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Go to Settings > Privacy & Security > App Password, then click App Password, create any name you like, then click Next. The app password will then appear.

After that, enter the Bluesky Application Password in the section **BSKY_PASS**.

> ##### REMINDER
> 
> Labeled **BSKY_HANDLE** &
> **BSKY_PASS** filled as above
{: .block-reminder }

Once everything is set up, try testing it by running the Python script in your directory. If an error appears, try troubleshooting it yourself if you are familiar with programming. If not, send the log displayed in CMD back to ChatGPT.

After all problem have been resolved, let's test whether the script is running properly and play a song using a music player that supports Last.fm scrobble, web scrobble, or Spotify. If successful, the log should appear as follows

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/contoh-post-otomatis.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hasil-di-bsky.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

How about it? Would you like to try it, or shall I put the modified script below if you want to refine it?

```scss
import requests, time, datetime

LASTFM_USER = "USERNAMEKAMU"
LASTFM_API_KEY = "APIKEYKAMU"
BSKY_HANDLE = "username.bsky.social"
BSKY_PASS = "APPSPASSWORDKAMU"

last_track = None

while True:
    r = requests.get("http://ws.audioscrobbler.com/2.0/", params={
        "method": "user.getrecenttracks",
        "user": "USERNAMEKAMU",
        "api_key": "APIKEYKAMU",
        "format": "json",
        "limit": 1
    }).json()

    track = r["recenttracks"]["track"][0]
    if "@attr" in track and track["@attr"].get("nowplaying") == "true":
        artist = track["artist"]["#text"]
        title = track["name"]
        text = f"🎵 Now Playing: {artist} – {title}"

        if text != last_track: 
            # login Bluesky
            session = requests.post("https://bsky.social/xrpc/com.atproto.server.createSession",
                json={"identifier": "username.bsky.social", "password": "APPSPASSWORDKAMU"}).json()
            headers = {
                "Authorization": f"Bearer {session['accessJwt']}",
                "Content-Type": "application/json"
            }

            post = {
                "repo": "DID AKUN KAMU",
                "collection": "app.bsky.feed.post",
                "record": {
                    "text": text,
                    "createdAt": datetime.datetime.utcnow().isoformat() + "Z"
                }
            }

            requests.post("https://bsky.social/xrpc/com.atproto.repo.createRecord",
                          headers=headers, json=post)
            print("Posted:", text)
            last_track = text

    time.sleep(30)
```
