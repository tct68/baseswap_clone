import transpileModules from 'next-transpile-modules'
import { withAxiom } from 'next-axiom'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()
const withTH = transpileModules([
  '@baseswap/uikit',
  '@baseswap/wagmi',
  '@baseswap/sdk',
  '@baseswap/ui',
  '@baseswap/hooks',
  '@baseswap/localization',
  '@baseswap/utils',
])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

export default withTH(withAxiom(withVanillaExtract(nextConfig)))
