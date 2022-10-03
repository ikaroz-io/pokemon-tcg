import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: '"Poppins", sans-serif',
    heading: '"Poppins", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    text: '#FFF',
    background: '#252836',
    primary: '#33e',
  },
  buttons: {
    primary: {
      color: '#FFF',
      bg: '#EA7C69',
    },
    secondary: {
      color: '#FFF',
      bg: 'rgba(255, 255, 255, 0.08);',
      '&:hover': {
        color: '#FFF',
        bg: 'rgba(255, 255, 255, 0.18);'
      }
    },
    third: {
      color: '#FFF',
      fontSize: '18px',
      width:'54px', 
      height:'54px', 
      borderRadius: '8px',
      bg: '#312F3C',
      '&:hover': {
        color: '#FFF',
        bg: 'rgba(255, 255, 255, 0.08);'
      }
    },
  }
}