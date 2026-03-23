# Verifying link ownership is surprisingly easy

I’ve been using social media for years and I’ve always wanted the flexibility of a checkmark next to my display name, but I don’t think it’s necessary because it turns out you have to pay to get the checkmark verification.

In the past, to verify an account’s official status, you had to submit a document with identification, such as a national ID card (KTP), tax ID, and so on for individuals. But now it’s much easier, especially with a link.

## Link Ownership
For links, you can verify ownership by simply adding _<a rel=”me” href=””_ in your html file, for example I will verify link ownership with fediverse Misskey, as in the following screenshot.

![image](assets/rel-me.png)

For Misskey itself, the verification process is fast, unlike threads, which can take up to a quarter of an hour. Facebook also has a link ownership verification system, but the process is more complicated. It’s more or less as shown in this screenshot.

![image](assets/contoh-verifikasi-tautan.png)

In Discord itself, there is also a verification system like this, and of course the methods are various, for example, I want to verify the ownership link of my website which I also host on nekoweb.org, for nekoweb, the method is more or less the same as neocities.org, namely placing a file containing values ​​in the .well-known folder like this, which will later be directly verified by Discord.

![image](assets/nekoweb.png) 

![image](assets/nekoweb-discord.png)


Even now, some web templates have been given support for automatic link verification, for example [al-folio](https://github.com/george-gca/multi-language-al-folio) and [Fuwari](https://github.com/saicaca/fuwari) which I used before the domain expired.