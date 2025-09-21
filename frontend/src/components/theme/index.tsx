import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Create the custom theme config
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Custom brand colors
        brand: {
          50: { value: "#e6f7ff" },
          100: { value: "#bae7ff" },
          200: { value: "#91d5ff" },
          300: { value: "#69c0ff" },
          400: { value: "#40a9ff" },
          500: { value: "#1890ff" }, // Primary brand color
          600: { value: "#096dd9" },
          700: { value: "#0050b3" },
          800: { value: "#003a8c" },
          900: { value: "#002766" },
          950: { value: "#001529" },
        },
        // Quran-specific green palette
        quran: {
          50: { value: "#f0f9f0" },
          100: { value: "#dcf2dc" },
          200: { value: "#bbe5bb" },
          300: { value: "#86d186" },
          400: { value: "#4cb74c" }, // Quran green
          500: { value: "#2e8b2e" },
          600: { value: "#247024" },
          700: { value: "#1e5a1e" },
          800: { value: "#1a4a1a" },
          900: { value: "#153d15" },
          950: { value: "#0a220a" },
        },
        // Orange accent colors
        accent: {
          50: { value: "#fff7ed" },
          100: { value: "#ffedd5" },
          200: { value: "#fed7aa" },
          300: { value: "#fdba74" },
          400: { value: "#fb923c" },
          500: { value: "#f97316" }, // Orange accent
          600: { value: "#ea580c" },
          700: { value: "#c2410c" },
          800: { value: "#9a3412" },
          900: { value: "#7c2d12" },
          950: { value: "#431407" },
        },
      },

      fonts: {
        heading: {
          value:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        },
        body: {
          value:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        },
        mono: {
          value:
            "'JetBrains Mono', 'Fira Code', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        },
        arabic: { value: "'Amiri', 'Times New Roman', serif" },
      },

      fontSizes: {
        xs: { value: "0.75rem" }, // 12px
        sm: { value: "0.875rem" }, // 14px
        md: { value: "1rem" }, // 16px
        lg: { value: "1.125rem" }, // 18px
        xl: { value: "1.25rem" }, // 20px
        "2xl": { value: "1.5rem" }, // 24px
        "3xl": { value: "1.875rem" }, // 30px
        "4xl": { value: "2.25rem" }, // 36px
        "5xl": { value: "3rem" }, // 48px
        "6xl": { value: "3.75rem" }, // 60px
        "7xl": { value: "4.5rem" }, // 72px
        "8xl": { value: "6rem" }, // 96px
        "9xl": { value: "8rem" }, // 128px
      },

      radii: {
        none: { value: "0" },
        sm: { value: "0.125rem" },
        base: { value: "0.25rem" },
        md: { value: "0.375rem" },
        lg: { value: "0.5rem" },
        xl: { value: "0.75rem" },
        "2xl": { value: "1rem" },
        "3xl": { value: "1.5rem" },
        full: { value: "9999px" },
      },

      shadows: {
        xs: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
        sm: {
          value:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        },
        md: {
          value:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        },
        lg: {
          value:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        },
        xl: {
          value:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
        "2xl": { value: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
        inner: { value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" },
        none: { value: "none" },
      },
    },

    semanticTokens: {
      colors: {
        // Brand semantic tokens
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "white" },
          fg: {
            value: {
              _light: "{colors.brand.700}",
              _dark: "{colors.brand.300}",
            },
          },
          muted: {
            value: {
              _light: "{colors.brand.100}",
              _dark: "{colors.brand.800}",
            },
          },
          subtle: {
            value: { _light: "{colors.brand.50}", _dark: "{colors.brand.900}" },
          },
          emphasized: {
            value: {
              _light: "{colors.brand.600}",
              _dark: "{colors.brand.400}",
            },
          },
          focusRing: { value: "{colors.brand.500}" },
        },

        // Quran semantic tokens
        quran: {
          solid: { value: "{colors.quran.500}" },
          contrast: { value: "white" },
          fg: {
            value: {
              _light: "{colors.quran.700}",
              _dark: "{colors.quran.300}",
            },
          },
          muted: {
            value: {
              _light: "{colors.quran.100}",
              _dark: "{colors.quran.800}",
            },
          },
          subtle: {
            value: { _light: "{colors.quran.50}", _dark: "{colors.quran.900}" },
          },
          emphasized: {
            value: {
              _light: "{colors.quran.600}",
              _dark: "{colors.quran.400}",
            },
          },
          focusRing: { value: "{colors.quran.500}" },
        },

        // Accent semantic tokens
        accent: {
          solid: { value: "{colors.accent.500}" },
          contrast: { value: "white" },
          fg: {
            value: {
              _light: "{colors.accent.700}",
              _dark: "{colors.accent.300}",
            },
          },
          muted: {
            value: {
              _light: "{colors.accent.100}",
              _dark: "{colors.accent.800}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.accent.50}",
              _dark: "{colors.accent.900}",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.accent.600}",
              _dark: "{colors.accent.400}",
            },
          },
          focusRing: { value: "{colors.accent.500}" },
        },

        // Background colors
        bg: {
          canvas: { value: { _light: "white", _dark: "{colors.gray.900}" } },
          default: { value: { _light: "white", _dark: "{colors.gray.800}" } },
          subtle: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.700}" },
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.600}" },
          },
          emphasized: {
            value: { _light: "{colors.gray.200}", _dark: "{colors.gray.500}" },
          },
        },

        // Foreground colors
        fg: {
          default: {
            value: { _light: "{colors.gray.900}", _dark: "{colors.gray.50}" },
          },
          muted: {
            value: { _light: "{colors.gray.600}", _dark: "{colors.gray.400}" },
          },
          subtle: {
            value: { _light: "{colors.gray.500}", _dark: "{colors.gray.500}" },
          },
          inverted: { value: { _light: "white", _dark: "{colors.gray.900}" } },
        },

        // Border colors
        border: {
          default: {
            value: { _light: "{colors.gray.200}", _dark: "{colors.gray.700}" },
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.800}" },
          },
          subtle: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.900}" },
          },
          emphasized: {
            value: { _light: "{colors.gray.300}", _dark: "{colors.gray.600}" },
          },
        },
      },
    },

    textStyles: {
      // Headings
      "heading.xs": {
        value: {
          fontSize: "lg",
          fontWeight: "bold",
          lineHeight: "1.33",
          letterSpacing: "0.08em",
        },
      },
      "heading.sm": {
        value: {
          fontSize: "xl",
          fontWeight: "bold",
          lineHeight: "1.33",
          letterSpacing: "0.05em",
        },
      },
      "heading.md": {
        value: {
          fontSize: "2xl",
          fontWeight: "bold",
          lineHeight: "1.2",
          letterSpacing: "0.02em",
        },
      },
      "heading.lg": {
        value: {
          fontSize: "3xl",
          fontWeight: "bold",
          lineHeight: "1.2",
          letterSpacing: "0.02em",
        },
      },
      "heading.xl": {
        value: {
          fontSize: "4xl",
          fontWeight: "bold",
          lineHeight: "1.1",
          letterSpacing: "0.02em",
        },
      },
      "heading.2xl": {
        value: {
          fontSize: "5xl",
          fontWeight: "bold",
          lineHeight: "1.1",
          letterSpacing: "0.02em",
        },
      },

      // Body text
      "body.xs": {
        value: {
          fontSize: "xs",
          lineHeight: "1.4",
        },
      },
      "body.sm": {
        value: {
          fontSize: "sm",
          lineHeight: "1.43",
        },
      },
      "body.md": {
        value: {
          fontSize: "md",
          lineHeight: "1.5",
        },
      },
      "body.lg": {
        value: {
          fontSize: "lg",
          lineHeight: "1.56",
        },
      },

      // Arabic text
      "arabic.sm": {
        value: {
          fontSize: "lg",
          fontFamily: "arabic",
          lineHeight: "1.8",
          textAlign: "right",
          direction: "rtl",
        },
      },
      "arabic.md": {
        value: {
          fontSize: "xl",
          fontFamily: "arabic",
          lineHeight: "1.8",
          textAlign: "right",
          direction: "rtl",
        },
      },
      "arabic.lg": {
        value: {
          fontSize: "2xl",
          fontFamily: "arabic",
          lineHeight: "1.8",
          textAlign: "right",
          direction: "rtl",
        },
      },
    },

    layerStyles: {
      // Cards
      "card.elevated": {
        value: {
          bg: "bg.default",
          shadow: "md",
          borderRadius: "lg",
          borderWidth: "1px",
          borderColor: "border.default",
        },
      },
      "card.flat": {
        value: {
          bg: "bg.default",
          borderRadius: "lg",
          borderWidth: "1px",
          borderColor: "border.default",
        },
      },
      "card.interactive": {
        value: {
          bg: "bg.default",
          shadow: "sm",
          borderRadius: "lg",
          borderWidth: "1px",
          borderColor: "border.default",
          cursor: "pointer",
          transition: "all 0.2s",
          _hover: {
            shadow: "md",
            transform: "translateY(-2px)",
            borderColor: "brand.emphasized",
          },
        },
      },

      // Surfaces
      "surface.raised": {
        value: {
          bg: "bg.canvas",
          shadow: "lg",
          borderRadius: "xl",
        },
      },
      "surface.flat": {
        value: {
          bg: "bg.subtle",
          borderRadius: "lg",
        },
      },
    },
  },

  globalCss: {
    "*": {
      borderColor: "border.default",
    },
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: "bg.canvas",
      color: "fg.default",
    },

    // Custom scrollbar
    "::-webkit-scrollbar": {
      width: "8px",
    },
    "::-webkit-scrollbar-track": {
      bg: "bg.muted",
    },
    "::-webkit-scrollbar-thumb": {
      bg: "border.emphasized",
      borderRadius: "full",
    },
    "::-webkit-scrollbar-thumb:hover": {
      bg: "fg.muted",
    },
  },
});

// Create and export the custom system
export const system = createSystem(defaultConfig, config);

// Export for easy access to theme values
export { config as themeConfig };
