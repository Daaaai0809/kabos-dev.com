import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import WithMDX from '@next/mdx';

const withMDX = WithMDX({
  extension: /\.mdx?$/,
});

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'js', 'jsx', 'mdx'],
};

export default withMDX(withVanillaExtract(nextConfig));
