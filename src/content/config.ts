import { defineCollection, z } from 'astro:content';

// Config definitions



const homepage = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
			trustBadge: z.string().optional(),
		}),
		proofPoints: z.object({
			items: z.array(z.object({
				text: z.string(),
				icon: z.string().optional(),
			})),
		}),
		skills: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				title: z.string(),
				icon: z.string(),
				description: z.string(),
			})),
		}),
		features: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				title: z.string(),
				icon: z.string(),
				description: z.string(),
			})),
		}),
		solutions: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				title: z.string(),
				icon: z.string(),
				features: z.array(z.string()),
				ctaText: z.string(),
				ctaLink: z.string(),
			})),
		}),
		callouts: z.array(z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
			image: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		})),
		process: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			steps: z.array(z.object({
				title: z.string(),
				icon: z.string(),
				description: z.string(),
			})),
		}),
		about: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			subheading: z.string(),
			description: z.string(),
			features: z.array(z.string()),
			image: z.string().optional(),
		}),
		testimonials: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				rating: z.number(),
				quote: z.string(),
				authorName: z.string(),
				authorTitle: z.string(),
				authorImage: z.string(),
			})),
		}),
		comparison: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			columnHeaders: z.array(z.string()),
			rows: z.array(z.object({
				feature: z.string(),
				subtitle: z.string(),
				weMakeSmall: z.string(),
				webAgency: z.string(),
				websiteBuilder: z.string(),
			})),
		}),
		templates: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			ctaText: z.string(),
			ctaLink: z.string(),
		}),
		faq: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				question: z.string(),
				answer: z.string(),
			})),
		}),
		contactForm: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			responseTime: z.string(),
			successMessage: z.object({
				title: z.string(),
				description: z.string(),
			}),
			nameField: z.object({
				label: z.string(),
				errorMessage: z.string(),
				placeholder: z.string(),
			}),
			emailField: z.object({
				label: z.string(),
				errorMessage: z.string(),
				placeholder: z.string(),
			}),
			messageField: z.object({
				label: z.string(),
				errorMessage: z.string(),
				placeholder: z.string(),
			}),
			submitButton: z.object({
				text: z.string(),
				loadingText: z.string(),
			}),
			privacyNote: z.string(),
		}),
		blocks: z.array(z.any()).optional(),
	})
});

const pages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		blocks: z.array(z.union([
			z.object({
				_template: z.literal('hero'), // We'll map this to _template in Tina
				label: z.string().optional(),
				heading: z.string(),
				description: z.string(),
				actions: z.array(z.object({
					label: z.string(),
					link: z.string(),
					variant: z.enum(['primary', 'secondary']).default('primary')
				})).optional()
			}),
			z.object({
				_template: z.literal('features'),
				heading: z.string(),
				items: z.array(z.object({
					title: z.string(),
					description: z.string(),
					icon: z.string()
				}))
			}),
			z.object({
				_template: z.literal('testimonial'),
				quote: z.string(),
				author: z.string()
			})
		])).optional()
	})
});

const about = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
		mission: z.object({
			sectionLabel: z.string().optional(),
			label: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
		values: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
			})),
		}),
		story: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			items: z.array(z.object({
				description: z.string(),
			})),
		}),
		stats: z.object({
			items: z.array(z.object({
				value: z.string(),
				label: z.string(),
			})),
		}),
		cta: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}),
		faq: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				question: z.string(),
				answer: z.string(),
			})),
		}).optional(),
	}),
});

const team = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
		members: z.array(z.object({
			name: z.string(),
			role: z.string(),
			image: z.string(),
			bio: z.string(),
		})),
		cta: z.object({
			heading: z.string(),
			description: z.string(),
			primaryBtn: z.object({
				text: z.string(),
				link: z.string(),
			}),
		}),
	}),
});

const contact = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
		form: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string().optional(),
			description: z.string().optional(),
		}).optional(),
		otherWays: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
				email: z.string(),
			})),
		}),
		serviceAreas: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string().optional(),
			description: z.string().optional(),
			mapSrc: z.string().optional(),
			suburbs: z.array(z.string()).optional(),
		}).optional(),

		faq: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				question: z.string(),
				answer: z.string(),
			})),
		}),
	}),
});

const process = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
		steps: z.object({
			sectionLabel: z.string().optional(),
			description: z.string().optional(),
			heading: z.string(),
			items: z.array(z.object({
				stepNumber: z.string(),
				title: z.string(),
				description: z.string(),
				listTitle: z.string(),
				listItems: z.array(z.string()),
			})),
		}),
		difference: z.object({
			sectionLabel: z.string().optional(),
			description: z.string().optional(),
			heading: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
			})),
		}),
		cta: z.object({
			heading: z.string(),
			description: z.string(),
			primaryBtn: z.object({
				text: z.string(),
				link: z.string(),
			}),

		}),
	}),
});

const quote = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
	}),
});

const templatesPage = defineCollection({
	type: "content",
	schema: z.object({
		hero: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
		cta: z.object({
			heading: z.string(),
			description: z.string(),
			primaryBtn: z.object({
				text: z.string(),
				link: z.string(),
			}),

		}),
	}),
});

const insights = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

const services = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
		mainServices: z.object({
			sectionLabel: z.string().optional(),
			description: z.string().optional(),
			heading: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
				features: z.array(z.string()),
				linkText: z.string(),
				linkUrl: z.string(),
			})),
		}),
		additionalServices: z.object({
			sectionLabel: z.string().optional(),
			description: z.string().optional(),
			heading: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
				linkText: z.string(),
				linkUrl: z.string(),
			})),
		}),
		industryFocus: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.string()),
		}),
		cta: z.object({
			heading: z.string(),
			description: z.string(),
			primaryBtn: z.object({
				text: z.string(),
				link: z.string(),
			}),

		}),
	}),
});

const templates = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		category: z.string(),
		image: z.string(),
		link: z.string(),
		order: z.number().optional(),
		aboutText: z.string().optional(),
		features: z.array(z.string()).optional(),
		lastUpdated: z.string().optional(),
		format: z.string().optional(),
	}),
});

const globals = defineCollection({
	type: 'content',
	schema: z.object({
		// TinaCMS Template field
		_template: z.string().optional(),

		// Footer fields
		socials: z.array(z.object({
			platform: z.string(),
			url: z.string(),
			icon: z.string(),
			visible: z.boolean().optional(),
		})).optional(),
		columns: z.array(z.object({
			heading: z.string(),
			links: z.array(z.object({
				label: z.string(),
				url: z.string(),
			})),
		})).optional(),
		copyright: z.string().optional(),
		legalLinks: z.array(z.object({
			label: z.string(),
			url: z.string(),
		})).optional(),

		// Reviews fields
		sectionLabel: z.string().optional(),
		heading: z.string().optional(),
		averageRating: z.number().optional(),
		totalReviews: z.number().optional(),
		items: z.array(z.object({
			author: z.string(),
			date: z.string(),
			avatar: z.string().optional(),
			rating: z.number(),
			content: z.string(),
		})).optional(),

		// Service Areas fields
		mapSrc: z.string().optional(),
		suburbs: z.array(z.string()).optional(),

	}),
});


export const collections = {
	homepage
};

