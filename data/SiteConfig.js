module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Elvish Calendar", // Site title.
  siteTitleAlt: "Notië Imberissëo", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  homeCover: "/logos/logo-1024.png", // Image for home page cover
  siteUrl: "http://calendar.erutulco.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Elvish Calendar.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "295194567670007", // FB Application ID for using app insights
  siteGATrackingID: "UA-112681814-1", // Tracking code ID for google analytics.
  disqusShortname: "elvish-calendar", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Joaquín Gatica", // Username to display in the author segment.
  userTwitter: "joaquingatica", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Montevideo, Uruguay", // User location to display in the author segment.
  userAvatar: "http://1.gravatar.com/avatar/e6c0aa1ea59ea12168ef6e164791a171", // User avatar to display in the author segment.
  userDescription:
    "I really like Tolkien", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/joaquingatica",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/joaquingatica",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:joaquingatica@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: `Copyright © ${new Date().getFullYear()}. Joaquín Gatica` // Copyright string for the footer of the website and RSS feed.
};
