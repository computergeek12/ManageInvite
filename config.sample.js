module.exports = {
    token:          "XXXXXXXXXXX",
    shardCount:     2,
    /* Emojis */
    emojis: {
        success:    "XXXXXXXXXXX",
        error:      "XXXXXXXXXXX",
        online:     "XXXXXXXXXXX",
        dnd:        "XXXXXXXXXXX",
        offline:    "XXXXXXXXXXX",
        idle:       "XXXXXXXXXXX",
        loading:    "XXXXXXXXXXX",
        warn:       "XXXXXXXXXXX",
        upgrade:    "XXXXXXXXXXX"
    },
    /* Embeds */
    color:          "XXXXXXXXXXX",
    footer:         "XXXXXXXXXXX",
    /* Logs */
    addLogs:        "XXXXXXXXXXX",
    removeLogs:     "XXXXXXXXXXX",
    shardLogs:      "XXXXXXXXXXX",
    dashLogs:       "XXXXXXXXXXX",
    statsLogs:      "XXXXXXXXXXX",
    premiumLogs:    "XXXXXXXXXXX",
    /* Dashboard */
    secret:         "XXXXXXXXXXX",
    baseURL:        "XXXXXXXXXXX",
    port:           3100,
    pswd:           "XXXXXXXXXXX",
    failureURL:     "https://docs.manage-invite.xyz",
    /* Other */
    mongodb:        "XXXXXXXXXXX",
    discord:        "XXXXXXXXXXX",
    prefix:         "+",
    owners: [ "XXXXXXXXXXX", "XXXXXXXXXXX" ],
    modRole:        "XXXXXXXXXXX",
    /* Top.gg */
    topToken: "XXXXXXXXXXX",
    /* Database */
    database: {
        user: "",
        host: "localhost",
        database: "manage_invite",
        password: "",
        port: 5432
    },
    /* PayPal */
    paypal: {
        mode: 'sandbox',
        live: {
            email: "XXXXXXXXXXX",
            returnURL: "https://dash.manage-invite.xyz/payment/callback",
            cancelURL: "https://dash.manage-invite.xyz/selector",
            ipnURL: "https://dash.manage-invite.xyz/payment/ipn",
            formURL: "https://www.paypal.com/cgi-bin/webscr",
            fetchURL: "https://ipnpb.paypal.com/cgi-bin/webscr?cmd=_notify-validate",
            ptdToken: "XXXXXXXXXXX"
        },
        sandbox: {
            email: "XXXXXXXXXXX",
            returnURL: "http://localhost:3100/payment/callback",
            cancelURL: "http://localhost:3100/",
            ipnURL: "http://ngork.io/payment/ipn",
            formURL: "https://www.sandbox.paypal.com/cgi-bin/webscr",
            fetchURL: "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr?cmd=_notify-validate",
            pdtToken: "XXXXXXXXXXX"
        }
    }
};