<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="apple-touch-icon" href="/nerowithborder.png" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.cdnfonts.com/css/aileron" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:ital,opsz,wght@0,9..144,200..900;1,9..144,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400;1,8..60,500&display=swap" rel="stylesheet">
    <title>nero | music livestreams on autopilot.</title>
    <link rel="canonical" href="https://www.nero.fan/" />
    <meta name="description" content="nero handles submissions, queue management, payments + more. spend less time managing your stream + more time on the music." />
    <meta name="application-name" content="nero" />
    <meta name="theme-color" content="#000000" />

    <!-- Performance hints -->
    <link rel="preconnect" href="https://fonts.cdnfonts.com" crossorigin />
    <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />
    <link rel="preconnect" href="https://app.posthog.com" crossorigin />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.nero.fan" />
    <meta property="og:title" content="nero | music livestreams on autopilot." />
    <meta property="og:description" content="nero handles submissions, queue management, payments + more. spend less time managing your stream + more time on the music." />
    <meta property="og:image" content="https://www.nero.fan/share.png" />
    <meta property="og:site_name" content="nero" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.nero.fan" />
    <meta property="twitter:title" content="nero | music livestreams on autopilot." />
    <meta property="twitter:description" content="nero handles submissions, queue management, payments + more. spend less time managing your stream + more time on the music." />
    <meta property="twitter:image" content="https://www.nero.fan/share.png" />
    <meta name="twitter:site" content="@nerofm" />

    <!-- Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "nero",
        "url": "https://www.nero.fan",
        "logo": "https://www.nero.fan/neronowordblack.png"
      }
    </script>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "nero",
        "alternateName": ["nero.fan"],
        "url": "https://www.nero.fan/"
      }
    </script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4CKWCNMD0S"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-4CKWCNMD0S');
    </script>
    <script type="module" crossorigin src="/assets/index-Bjylfpcl.js"></script>
    <link rel="modulepreload" crossorigin href="/assets/vendor-D9mZTgos.js">
    <link rel="modulepreload" crossorigin href="/assets/ui-D369CjTy.js">
    <link rel="modulepreload" crossorigin href="/assets/stripe-B-Y4zVZ4.js">
    <link rel="stylesheet" crossorigin href="/assets/index-DnsUZ76u.css">
  </head>
  <body>
    <script>
      // Prevent white flash for overlay pages - apply theme before paint
      (function() {
        if (window.location.pathname.includes('/overlay/')) {
          var params = new URLSearchParams(window.location.search);
          var theme = params.get('theme') || 'dark';
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          }
        }
      })();
    </script>
    <div id="root"></div>
  </body>
</html>
<!--  -->
