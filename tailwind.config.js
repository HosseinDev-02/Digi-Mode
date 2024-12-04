/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D6EFD',
          tint: {
            1: '#E4EFFF',
            3: '#AECFFE',
            5: '#79AEFE',
            7: '#438EFD',
          },
          shade: {
            1: '#0260EB',
            3: '#0148B0',
            5: '#013075',
            7: '#00183B',
          }
        },
        secondary: {
          DEFAULT: '#FFC51A',
          tint: {
            1: '#FFF9E6',
            3: '#FFECB3',
            5: '#FFDF80',
            7: '#FFD24D'
          },
          shade: {
            1: '#FABB00',
            3: '#BB8C00',
            5: '#7D5D00',
            7: '#3E2F00'
          }
        },
        neutral: {
          1: '#E9EAEE',
          2: '#CBCED7',
          3: '#AEB2C0',
          4: '#9095AA',
          5: '#737993',
          6: '#5B6176',
          7: '#444859',
          8: '#2E303B',
          9: '#17181E',
          10: '#0F0F0F'
        },
        state: {
          error: {
            DEFAULT: '#DC3545',
            'light': '#FFEEF0'
          },
          success: {
            DEFAULT: '#28A745',
            'light': '#D8FFE1'
          },
          warning: {
            DEFAULT: '#FFBE00',
            'light': '#FFF1C9'
          }
        }
      },
      fontFamily: {
        'IRANSansX-Regular': 'IRANSansX Regular',
        'IRANSansX-Medium': 'IRANSansX Medium',
        'IRANSansX-Bold': 'IRANSansX Bold',
        'IRANSansX-DemiBold': 'IRANSansX DemiBold',
        'Vazir-Black': 'vazir black',
        'Aquire': 'Aquire'
      },
      boxShadow: {
        1: '0 2px 32px 0 rgba(28, 28, 28, 6%)',
        2: '0 3px 10px 0 rgba(28, 28, 28, 3%)',
        0: '0 0 15px 0 rgba(28, 28, 28, 10%)'
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      backdropBlur: {
        1: '20px',
        2: '50px'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

