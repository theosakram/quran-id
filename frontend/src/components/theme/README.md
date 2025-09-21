# Quran ID Custom Theme System

This custom theme system provides a comprehensive design foundation for both light and dark modes using Chakra UI v3.

## 🎨 Theme Structure

### Color Palettes

#### Brand Colors (`brand.*`)

- **Primary**: `brand.500` (#1890ff) - Main brand color
- **Semantic tokens**: `brand.solid`, `brand.contrast`, `brand.fg`, `brand.muted`, `brand.subtle`, `brand.emphasized`, `brand.focusRing`

#### Quran Colors (`quran.*`)  

- **Primary**: `quran.500` (#2e8b2e) - Islamic green
- **Usage**: Perfect for Islamic/religious content, chapters, verses
- **Semantic tokens**: `quran.solid`, `quran.contrast`, `quran.fg`, `quran.muted`, `quran.subtle`, `quran.emphasized`, `quran.focusRing`

#### Accent Colors (`accent.*`)

- **Primary**: `accent.500` (#f97316) - Orange accent
- **Usage**: Highlights, CTAs, special elements
- **Semantic tokens**: `accent.solid`, `accent.contrast`, `accent.fg`, `accent.muted`, `accent.subtle`, `accent.emphasized`, `accent.focusRing`

### Semantic Color Tokens

These automatically adapt for light/dark modes:

```tsx
// Background colors
bg.canvas    // Main page background
bg.default   // Card/component backgrounds  
bg.subtle    // Subtle background variations
bg.muted     // More muted backgrounds
bg.emphasized // Emphasized backgrounds

// Foreground colors
fg.default   // Primary text color
fg.muted     // Secondary text color
fg.subtle    // Tertiary text color
fg.inverted  // Inverted text (white on dark, dark on light)

// Border colors  
border.default   // Standard borders
border.muted     // Subtle borders
border.subtle    // Very subtle borders
border.emphasized // Emphasized borders
```

## 📝 Typography System

### Text Styles

```tsx
// Headings
textStyle="heading.xs"   // Small headings
textStyle="heading.sm"   // Small-medium headings  
textStyle="heading.md"   // Medium headings
textStyle="heading.lg"   // Large headings
textStyle="heading.xl"   // Extra large headings
textStyle="heading.2xl"  // 2X large headings

// Body text
textStyle="body.xs"      // Small body text
textStyle="body.sm"      // Small-medium body text
textStyle="body.md"      // Medium body text (default)
textStyle="body.lg"      // Large body text

// Arabic text
textStyle="arabic.sm"    // Small Arabic text (RTL, serif font)
textStyle="arabic.md"    // Medium Arabic text  
textStyle="arabic.lg"    // Large Arabic text
```

### Custom Fonts

```tsx
fonts.heading    // Inter - For headings
fonts.body       // Inter - For body text
fonts.mono       // JetBrains Mono - For code
fonts.arabic     // Amiri - For Arabic text
```

## 🎨 Layer Styles

Pre-defined component styles:

```tsx
// Cards
layerStyle="card.elevated"    // Elevated card with shadow
layerStyle="card.flat"        // Flat card without shadow
layerStyle="card.interactive" // Interactive card with hover effects

// Surfaces  
layerStyle="surface.raised"   // Raised surface with large shadow
layerStyle="surface.flat"     // Flat surface background
```

## 🌙 Theme Toggle

The theme includes automatic light/dark mode support:

```tsx
import { ColorModeButton } from "@/components/ui/color-mode";

// Add theme toggle button
<ColorModeButton variant="ghost" size="sm" />
```

## 📦 Usage Examples

### Using Semantic Tokens

```tsx
// Instead of hardcoded colors
<Box bg="white" _dark={{ bg: "gray.800" }}>

// Use semantic tokens
<Box bg="bg.default">
```

### Using Text Styles

```tsx
// Instead of individual properties
<Text fontSize="2xl" fontWeight="bold" lineHeight="1.2">

// Use text styles  
<Text textStyle="heading.lg">
```

### Using Custom Colors

```tsx
// Brand colors
<Button colorPalette="brand">Primary Action</Button>
<Badge colorPalette="quran">Islamic Content</Badge>
<Alert colorPalette="accent">Important Notice</Alert>
```

### Using Layer Styles

```tsx
// Pre-styled components
<Box layerStyle="card.interactive">
  <Text>Interactive card content</Text>
</Box>
```

## 🎯 Benefits

1. **Consistent Design**: All components use the same color palette and typography
2. **Automatic Dark Mode**: Semantic tokens handle light/dark theme switching
3. **Accessible**: High contrast ratios and proper color relationships
4. **Maintainable**: Centralized theme configuration
5. **Flexible**: Easy to customize and extend
6. **Islamic-Friendly**: Special Quran color palette and Arabic typography support

## 🔧 Customization

To modify the theme, edit `/src/components/theme/index.tsx`:

1. **Add new colors**: Update the `colors` object and create semantic tokens
2. **Modify typography**: Update `textStyles` and `fonts`
3. **Add layer styles**: Define new `layerStyles` for common component patterns
4. **Update spacing/shadows**: Modify tokens as needed

The theme automatically applies to all Chakra UI components throughout the application.
