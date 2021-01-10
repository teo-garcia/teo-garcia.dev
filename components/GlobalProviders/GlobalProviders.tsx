import * as React from 'react'
import { Global, ThemeProvider, css } from '@emotion/react'

type GlobalProvidersProps = {
  children: React.ReactNode
}

function GlobalProviders({ children }: GlobalProvidersProps) {
  return (
    <ThemeProvider theme={{}}>
      <Global
        styles={css`
          body {
            background-color: peru;
          }
        `}
      />
      {children}
    </ThemeProvider>
  )
}
export { GlobalProviders }
