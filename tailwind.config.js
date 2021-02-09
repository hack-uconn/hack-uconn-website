module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        uconn_primary: "#000E2F",
        uconn_register: "#004369",
        topic_primary: "#cce2b9",
        topic_secondary: "#6f913d",
        topic_middle: "#546D2E",
        topic_dark: "#1C2510", //darker "#253014"
        topic_about_slider: "#B5CE9A",
        topic_current_header: "#859E64",
        topic_current_about_card: "#628345",
        topic_current_schedule_card: "#2BC6F6",
        topic_current_schedule_card_header: "#28A9D1",
        topic_current_prizes_card: "#828282",
        topic_sponsor_middle: "#546D2E",
        topic_sponsor_dark: "#38491F",
        text_light: "#FFFFFF",
        text_dark: "#000000",
        header_btn: "#65FB7A",
        header_menu: "#7E868C",
        header_mobile_register: "#BDC0C3"
      },
      fontFamily: {
        primary: ['"Caveat Brush"']
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
        "landingLogoHeight": "34rem",
        "currentScheduleDay1Height": "30rem" 
      }),
      maxHeight: {
        "currentMaxHeight": "20rem",
        "landingLogoHeight": "34rem",
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
        "sponsorWidth": "60rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
