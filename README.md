# poisonedApple
Excel keylogger + Data collection server

Recently someone tried to scam me, promising to send a huge amount of money to my bank account and he needed my bank account information.

Guess what? I'll play the game. d:^$D

**How it works**

```javascript
const IDIOT = "Candidate Scammer";
```

1. IDIOT recives excel file
2. IDIOT opens file and enables macros
3. The macro create a .vbs file in the user's directory and a shortcut in the Windows Startup folder
4. IDIOT closes the file and shuts down his computer
5. IDIOT turns on his computer, shortcut calls the execution of the .vbs file which opens a hidden session of excel logging the keystrokes and the text in the clipboard.
6. The data is sent every 100 characters or every 10 seconds to the control server that stores it in a DB.

Of course you need to adapt the code to your needs, easy enough to not require any instructions.
