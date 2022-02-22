module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        uconn_primary: "#000E2F",
        uconn_register: "#004369",
        topic_primary: "#ffffbd",
        topic_secondary: "#049dad",
        topic_middle: "#ffcd1b",
        topic_dark: "#ffcd1b", //darker "#253014"
        topic_white: "#FFFFFF",
        topic_about_slider: "#ffcd1b",
        topic_current_header: "#ffcd1b",
        topic_current_about_card: "#049dad",
        topic_current_schedule_card: "#049dad",
        topic_current_schedule_card_header: "#28A9D1",
        topic_current_prizes_card: "#049dad",
        topic_sponsor_lighter: "#049dad",
        topic_sponsor_middle: "#049dad",
        topic_sponsor_dark: "#049dad",
        topic_sponsor_darker: "#049dad",
        text_light: "#000044",
        text_dark: "#000044",
        header_btn: "#65FB7A",
        header_menu: "#7E868C",
        header_mobile_register: "#BDC0C3"
      },
      fontFamily: {
        primary: ['"Avenir Next Condensed"']
      },
      fontSize: {
        aboutDescriptionMobile: ['0.6rem', '0.5rem'],
        mobileSmallFAQText: ['0.55rem', '0.55rem'],
        mobileMediumFAQText: ['0.7rem', '0.7rem']
      },
      height: theme => ({
        "landingHeight": "calc(100vh - 5rem)",
        "currentHeight": "36rem",
        "currentMobileHeight": "26rem",
        "currentBodyMobileHeight": "28rem",
        "landingLogoHeight": "26rem",
        "currentScheduleDay1Height": "30rem",
        "sponsorHeight": "38rem" 
      }),
      maxHeight: {
        "currentMaxHeight": "20rem",
        "landingLogoHeight": "26rem",
      },
      margin: {
        "app": "6%"
      },
      transitionProperty: {
        'height': 'height'
      },
      width: {
        "aboutWidth": "80rem",
        "aboutTabsWidth": "40rem",
        "aboutDescriptionWidth": "62rem",
        "aboutSlider": "40rem",
        "currentWidth": "42rem",
        "currentCardWidth": "30rem", 
        "faq": "58rem",
        "sponsorWidth": "72rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
