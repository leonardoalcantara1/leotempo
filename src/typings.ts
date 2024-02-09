export interface ProjectTheme {
  colors: {
    primary: string
    secondary: string
    negative: string
    positive: string
  }
  font: {
    size: string
    primary: {
      family: string
    }
    secondary: {
      family: string
    }
  }
  spacing: number[]
}