# prime-video-history-remover
Amazon's Prime Video only allows users to delete a single item from the history at a time. This script automates watch history deletion.

https://www.primevideo.com/settings/watch-history/

There are two versions, console and tampermonkey. The first one must be copied and pasted into your browser's DevTools console, the second one can be installed in Tampermonkey (Select raw in Github. Click Tampermonkey's icon -> install new script, copy/paste, save).

It worked in my account, in two locations, in two profiles. 

If it doesn't work for you, it might be that the buttons' class varies. In this case, inspect the page and check the one for you. Then edit the code in lines 6 or 46, respectively.
