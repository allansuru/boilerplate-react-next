import { render, screen } from '@testing-library/react'

import Main from './index'

describe('<Main />', () => {
  it('shoud render the heading', () => {
    expect(screen.getByRole('heading', { name: /react avançado/i }))
      .toBeInTheDocument
  })
})
