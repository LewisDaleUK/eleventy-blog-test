const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ["./src/**/*.{md,njk,html}"],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
	 	},
		colors: colors,
		backgroundColor: ({theme}) => theme('colors'),
		textColor: ({theme}) => theme('colors'),
		spacing: {
			'size-4xs': 'clamp(0.125rem, calc(0.12rem + 0.03vw), 0.21rem)',
			'size-3xs': 'clamp(0.25rem, calc(0.24rem + 0.06vw), 0.31rem)',
			'size-2xs': 'clamp(0.50rem, calc(0.48rem + 0.13vw), 0.63rem)',
			'size-xs': 'clamp(0.75rem, calc(0.71rem + 0.19vw), 0.94rem)',
			'size-s': 'clamp(1.00rem, calc(0.95rem + 0.25vw), 1.25rem)',
			'size-m': 'clamp(1.50rem, calc(1.43rem + 0.38vw), 1.88rem)',
			'size-l': 'clamp(2.00rem, calc(1.90rem + 0.50vw), 2.50rem)',
			'size-xl': 'clamp(3.00rem, calc(2.85rem + 0.75vw), 3.75rem)',
			'size-2xl': 'clamp(4.00rem, calc(3.80rem + 1.00vw), 5.00rem)',
			'size-3xl': 'clamp(6.00rem, calc(5.70rem + 1.50vw), 7.50rem)',
		},
		fontSize: {
			'size-2xs': 'clamp(0.56rem, calc(0.72rem + -0.14vw), 0.69rem)',
			'size-xs': 'clamp(0.83rem, calc(0.83rem + 0.00vw), 0.83rem)',
			'size-s': 'clamp(1.00rem, calc(0.95rem + 0.25vw), 1.25rem)',
			'size-m': 'clamp(1.20rem, calc(1.07rem + 0.68vw), 1.88rem)',
			'size-l': 'clamp(1.44rem, calc(1.17rem + 1.37vw), 2.81rem)',
			'size-xl': 'clamp(1.73rem, calc(1.23rem + 2.49vw), 4.22rem)',
			'size-2xl': 'clamp(2.07rem, calc(1.22rem + 4.25vw), 6.33rem)',
			'size-3xl': 'clamp(2.49rem, calc(1.09rem + 7.00vw), 9.49rem)',
		},
		fontFamily: {
			sans: defaultTheme.fontFamily.sans,
			mono: ['"Space Grotesk"', ...defaultTheme.fontFamily.mono],
		},
		gap: ({theme}) => ({
			none: '0px',
			...theme('spacing'),
		}),
		margin: ({theme}) => ({
			auto: 'auto',
			none: '0',
			...theme('spacing')
		}),
		padding: ({theme}) => ({
			none: '0',
			...theme('spacing')
		}),
		scrollMargin: ({theme}) => theme('spacing'),
		textColor: ({theme}) => theme('colors'),
		zIndex: {
			auto: 'auto',
			0: '0',
			10: '10',
			20: '20',
			30: '30',
			40: '40',
			50: '50',
			60: '60',
			70: '70',
			80: '80',
			90: '90',
			100: '100',
		}
	},
	variantOrder: [
		'first',
		'last',
		'odd',
		'even',
		'visited',
		'checked',
		'empty',
		'read-only',
		'group-hover',
		'group-focus',
		'focus-within',
		'hover',
		'focus',
		'focus-visible',
		'active',
		'disabled',
	],
}