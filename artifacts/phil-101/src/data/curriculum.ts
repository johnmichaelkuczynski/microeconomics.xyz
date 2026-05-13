// AUTO-GENERATED from attached_assets/Clean_MicroEcon_101_Course_Book.docx — verbatim curriculum content.

export interface Module {
  id: string;
  number: number;
  title: string;
  points: number;
  type: "discussion" | "essay" | "termpaper";
  objectives: string[];
  reading: string;
  assignment: string;
  modelResponse: string;
}

export const modules: Module[] = [
  {
    id: "d1",
    number: 1,
    title: "Discussion 1: Opportunity Cost and the Production Possibilities Frontier",
    points: 50,
    type: "discussion",
    objectives: [
      "Distinguish between explicit (accounting) costs and implicit (opportunity) costs, and apply the distinction to everyday decisions.",
      "Use the Production Possibilities Frontier to explain efficiency, scarcity, and the law of increasing opportunity costs.",
    ],
    reading: `Economics is the study of how people allocate scarce resources among competing uses. The fundamental fact of scarcity is that we cannot have everything we want, so every choice involves giving up something else.

Opportunity cost is the value of the next-best alternative that must be given up when a choice is made. It is not the same as the dollar cost of an item. The opportunity cost of going to college includes tuition AND the wages you would have earned working instead. The opportunity cost of an hour spent watching television is whatever else you could have done with that hour.

Key insights:
- Every choice has an opportunity cost, even choices that involve no money.
- Sunk costs (money already spent and unrecoverable) should NOT factor into current decisions. Only future opportunity costs matter.
- 'There is no such thing as a free lunch' (Milton Friedman): even items given to you for free have an opportunity cost (your time, the foregone alternative).

The Production Possibilities Frontier (PPF) graphs the maximum combinations of two goods an economy can produce with its current resources. Points on the curve are efficient. Points inside are inefficient (wasted resources). Points outside are unattainable with current resources.

The PPF is typically bowed outward because resources are not equally suited to all uses. To produce more of good X, you must reallocate resources increasingly poorly suited to X, so the opportunity cost of X rises as more is produced. This is the law of increasing opportunity costs.`,
    assignment: `Assignment (50 points):
1. Calculate the opportunity cost in each scenario:
   a. You spend $30 on a concert ticket. You also miss a shift at work where you would have earned $80. What is the total cost of attending the concert?
   b. You inherit a building worth $500,000 and open a coffee shop in it. The coffee shop earns $40,000/year in accounting profit. You could rent the building out for $35,000/year. What is your economic profit?
   c. A country can produce 100 cars OR 200 tons of wheat using all its resources. What is the opportunity cost of one car? Of one ton of wheat?
2. Explain in your own words why economists distinguish between accounting profit and economic profit. Give an example where a business earning a positive accounting profit is actually losing money in economic terms.`,
    modelResponse: `Model Response

Opportunity cost calculations:

a. The total cost of attending the concert is $110. The explicit cost is the $30 ticket price. The implicit (opportunity) cost is the $80 in foregone wages. Economists add these together to get the full economic cost of the decision. The $30 is the accounting cost; the $110 is the economic cost. A person earning $20/hour and a person earning $200/hour face the same explicit cost for the concert but very different economic costs, which is why people with high opportunity costs tend to consume less of time-intensive activities.

b. Economic profit is $5,000/year. Accounting profit treats the building as if it were free, since you own it. Economic analysis recognizes that the building has an opportunity cost equal to what you could earn from its next-best use, which is $35,000/year in rental income. So economic profit = $40,000 - $35,000 = $5,000. The coffee shop is profitable in economic terms, but barely. If a similar opportunity arose paying $45,000/year, the building's owner should reallocate.

c. The opportunity cost of one car is 2 tons of wheat (200/100). The opportunity cost of one ton of wheat is 0.5 cars (100/200). These are simply the slopes of the linear PPF, expressed each way. Note that this assumes a linear PPF; with the more realistic bowed-out PPF, opportunity costs would rise as more of one good is produced.

Accounting profit versus economic profit:

Accountants track explicit costs: payments to suppliers, wages to workers, rent paid to landlords. Accounting profit = Revenue - Explicit costs. This is what shows up on tax returns and financial statements.

Economists also track implicit costs: the foregone returns on resources the owner contributes. An owner who works full-time in her own business is implicitly paying herself the wage she could earn elsewhere. An owner who uses her own building is implicitly paying herself the rent she could collect elsewhere. An owner who invests her own savings into the business is implicitly paying the interest those savings could earn elsewhere. Economic profit = Revenue - Explicit costs - Implicit costs.

Example: A consultant quits her $150,000/year job to open a bakery. She invests $200,000 of her savings (which were earning 5%, or $10,000/year, in bonds). She works 60 hours/week in the bakery. After one year, the bakery has revenues of $300,000 and explicit costs (ingredients, rent, employee wages, utilities) of $200,000. Her accountant tells her she earned $100,000 in accounting profit.

But her economic profit is negative. Her implicit costs include $150,000 in foregone salary plus $10,000 in foregone investment income, totaling $160,000. Her economic profit is $300,000 - $200,000 - $160,000 = -$60,000. She is losing $60,000 per year compared to her best alternative. In economic terms, the bakery is destroying value, even though it shows a positive accounting profit. This is exactly the kind of situation that drives the long-run behavior of competitive markets: businesses earning negative economic profits exit, while businesses earning positive economic profits attract entry.

The distinction matters because rational long-run decisions require comparing all alternatives, not just the bookkeeping. Many small businesses persist for years showing accounting profits while quietly destroying their owners' net worth. The owner is in effect paying a premium to be self-employed. That may be a defensible choice on non-monetary grounds (autonomy, identity, passion), but it should be recognized for what it is. The economic-profit framework forces that recognition.`,
  },
  {
    id: "e1",
    number: 2,
    title: "Essay 1: Supply, Demand, and Price Controls",
    points: 50,
    type: "essay",
    objectives: [
      "Explain how supply and demand interact to determine equilibrium price and quantity in a competitive market.",
      "Analyze the consequences of price ceilings (rent control) and price floors (minimum wage), and evaluate them against empirical evidence.",
    ],
    reading: `The supply-and-demand model is the central tool of microeconomics. It describes how prices and quantities are determined in competitive markets through the interaction of buyers and sellers.

The demand curve shows the quantity that buyers are willing and able to purchase at each price. It slopes downward: as the price falls, more buyers are willing to buy, and existing buyers want more. This is the Law of Demand.

The supply curve shows the quantity that sellers are willing and able to sell at each price. It slopes upward: as the price rises, more sellers enter the market, and existing sellers produce more. This is the Law of Supply.

Market equilibrium occurs at the price where the quantity demanded equals the quantity supplied. At this price, the market clears: no shortages, no surpluses. If price is above equilibrium, there is a surplus, and downward price pressure emerges. If price is below equilibrium, there is a shortage, and upward price pressure emerges. Free markets tend toward equilibrium.

Price controls override the market price:
- A price ceiling sets a maximum price below the equilibrium. Rent control and gasoline price ceilings are examples. The predictable result is a persistent shortage: quantity demanded exceeds quantity supplied.
- A price floor sets a minimum price above the equilibrium. Minimum wage laws and agricultural price supports are examples. The predictable result is a persistent surplus: quantity supplied exceeds quantity demanded.

Both produce 'deadweight loss': transactions that would have created value for both parties no longer occur, so total surplus (consumer plus producer welfare) declines.`,
    assignment: `Assignment (50 points):
Write a 600-800 word essay addressing the following:

1. Explain how supply and demand interact to determine market equilibrium. Use a specific example.
2. Analyze rent control as a price ceiling. What does standard economic theory predict will happen in a city that imposes binding rent control? Discuss empirical evidence from New York City, San Francisco, or Stockholm.
3. Analyze the minimum wage as a price floor. What does standard theory predict? What does the empirical evidence actually show, and why has the empirical literature evolved away from the textbook prediction?`,
    modelResponse: `Model Response

Supply, Demand, and the Two Faces of Price Controls

The supply-and-demand model is the workhorse of microeconomic analysis. In a competitive market, buyers and sellers each respond to prices according to their own circumstances, and the market price emerges as the level at which the quantity buyers want exactly equals the quantity sellers offer. Consider gasoline: if the price is $3/gallon, buyers will purchase some specific quantity, and sellers will offer some specific quantity. If buyers want more than sellers offer, gas stations will run out, and stations will discover they can charge more. If sellers offer more than buyers want, stations will discount to clear inventory. The equilibrium price is where these forces balance. The model is powerful because it makes specific testable predictions about what happens when conditions change. If a hurricane shuts down Gulf Coast refineries, supply falls, and the equilibrium price rises. If electric vehicles displace gasoline cars, demand falls, and the equilibrium price drops.

Price controls disrupt this process by legal fiat. They are politically attractive because they appear to help one side of the market (renters, low-wage workers) without obvious cost. But the cost emerges through quantity adjustments and quality adjustments, which are harder to see than price changes but no less real.

Rent control as a price ceiling:

When a government caps rents below the equilibrium level, the predictable result is a shortage. At the controlled price, more people want apartments than landlords are willing to supply. Several adjustments occur. New construction declines, because the controlled rent does not cover the costs of building and maintaining housing plus a normal return on capital. Existing landlords let buildings deteriorate, because maintenance is costly and rent revenue is capped. Some landlords convert rentals to condominiums or other uses not covered by the controls. Quality falls along multiple dimensions: less maintenance, less responsive landlords, fewer amenities. A black market emerges (key money, side payments, discrimination in tenant selection).

The empirical evidence supports these predictions broadly. Stockholm has had rent control since World War II. The result is a notorious housing queue that can take 20 years to navigate; informal subletting at higher prices is widespread; new construction of rental housing is minimal. San Francisco's rent control was studied by Diamond, McQuade, and Qian (2019) using a natural experiment when 1994 legislation extended controls to small multi-unit buildings. They found that rent control reduced the supply of available rental housing by 15% over the following decades, as landlords removed units from the rental market through condo conversions and other strategies. The reduced supply pushed market-rate rents in non-controlled buildings higher than they would otherwise have been. Tenants who held controlled apartments benefited substantially; everyone else lost. New York City, which has had various forms of rent regulation since 1943, shows similar patterns: shortages, queuing, side payments, deferred maintenance, and political battles over who deserves to keep a regulated apartment.

Rent control consistently helps existing tenants while harming future tenants, landlords, and the city's housing stock. The textbook prediction is broadly correct.

Minimum wage as a price floor:

Standard supply-and-demand theory predicts that a minimum wage above the market-clearing wage will produce unemployment among low-wage workers. Firms will hire fewer workers because labor is now more expensive than the value of the marginal worker's output. Workers who keep their jobs benefit; workers who lose their jobs or never get hired bear the cost. The textbook prediction is unambiguous.

The empirical literature is more nuanced. Card and Krueger's landmark 1994 study compared fast-food employment in New Jersey (which raised its minimum wage) to Pennsylvania (which did not), and found no detectable employment effect, contradicting the textbook prediction. Their work triggered decades of subsequent research using ever more sophisticated methods. The current consensus is that moderate minimum wage increases produce small or undetectable employment effects in most settings, while larger increases relative to the local median wage do produce measurable disemployment effects.

Why has the empirical evidence diverged from the simple model? Several mechanisms have been identified. Labor markets are often not perfectly competitive; firms have some monopsony power (a single dominant employer in a local labor market), and a minimum wage can offset that power without reducing employment. Firms can respond to higher wages by raising prices (passing costs to customers), by reducing turnover (which lowers training costs), by improving productivity (better training, better technology), or by reducing non-wage benefits. Workers respond to higher wages by working harder (the efficiency wage effect). The result is that the labor demand curve at the margin is much less elastic than the simple competitive model assumes.

The threshold question is where the minimum wage sits relative to the median local wage. A $15 minimum wage in San Francisco (median wage around $30) is roughly half the median; small disemployment effect expected. The same $15 minimum wage in rural Mississippi (median wage around $17) is 88% of the median; large disemployment effect predicted. The Congressional Budget Office's analyses of federal minimum wage proposals consistently find that effects scale with the ratio.

Conclusion:

The two cases illustrate that the simple supply-and-demand model is a starting point, not a complete theory. For rent control, the standard prediction is well-supported empirically: shortages, deterioration, queuing. For minimum wages, the standard prediction holds at high enough levels but fails for moderate increases, because labor markets violate the competitive assumptions in important ways. The lesson is to take the model seriously but not literally. Price controls have real costs and real benefits; the question is the magnitude in specific contexts. Honest policy analysis requires asking which market frictions matter, not whether to use the textbook model at all.`,
  },
  {
    id: "d2",
    number: 3,
    title: "Discussion 2: Elasticity and Pricing Decisions",
    points: 50,
    type: "discussion",
    objectives: [
      "Define and calculate the major elasticities (price, income, cross-price) and explain what determines them.",
      "Apply elasticity reasoning to real-world pricing decisions, including the strategic differences across firms with different substitute landscapes.",
    ],
    reading: `Elasticity measures how responsive one variable is to changes in another. In microeconomics, the most important elasticities are:

- Price elasticity of demand: percentage change in quantity demanded divided by percentage change in price. If a 10% price increase causes quantity demanded to fall by 5%, elasticity is -0.5 (typically reported as 0.5, with the negative sign assumed).
- Price elasticity of supply: percentage change in quantity supplied divided by percentage change in price.
- Income elasticity of demand: percentage change in quantity demanded divided by percentage change in income.
- Cross-price elasticity: how the demand for one good changes when the price of another good changes.

Categories of price elasticity:
- Perfectly inelastic (E = 0): quantity does not change at all when price changes. Almost no real good is perfectly inelastic, but life-saving medications come close.
- Inelastic (0 < E < 1): quantity changes proportionally less than price.
- Unit elastic (E = 1): quantity changes proportionally with price.
- Elastic (E > 1): quantity changes proportionally more than price.
- Perfectly elastic (E = infinity): any tiny price increase eliminates all demand. Approximated in highly competitive commodity markets.

Determinants of elasticity:
- Availability of substitutes: more substitutes means more elastic demand.
- Necessity vs. luxury: necessities are inelastic; luxuries are elastic.
- Share of budget: items that are a small share of income (matches, salt) tend to be inelastic.
- Time horizon: demand is more elastic over longer horizons as consumers find substitutes.

The revenue rule: if demand is inelastic, raising price increases total revenue. If demand is elastic, raising price decreases total revenue. Firms that ignore this lose money.`,
    assignment: `Assignment (50 points):
1. For each of the following goods, predict whether demand is likely elastic or inelastic, and explain why:
   a. Insulin for a diabetic
   b. Coca-Cola brand soda
   c. Gasoline in the short run (next month)
   d. Gasoline in the long run (next decade)
   e. Restaurant meals
   f. Salt
2. A bookstore is considering raising the price of paperback novels by 20%. Walk through the analysis the manager should do. What information would she need to predict whether revenue rises or falls? Discuss how the answer might differ for a small independent bookstore versus Amazon.`,
    modelResponse: `Model Response

Elasticity predictions:

a. Insulin for a diabetic: highly inelastic. Insulin has no close substitute (no other compound performs the same function), it is medically necessary, and the consequences of going without it can be fatal. A diabetic facing a 100% price increase will still buy roughly the same quantity, cutting back on other spending instead. This is why insulin pricing has been so politically contentious: producers have substantial pricing power because demand barely responds to price.

b. Coca-Cola brand soda: elastic. Coke has many close substitutes (Pepsi, store-brand colas, other beverages). A 20% price increase on Coke would send substantial sales to Pepsi and to private labels. This is fundamentally different from the elasticity of soda as a whole, which is much less elastic because there are fewer substitutes for sweetened beverages overall. Brand elasticity is almost always higher than category elasticity.

c. Gasoline in the short run: inelastic. In the next month, drivers cannot easily change vehicles, change residence relative to work, or change daily routines. They will drive somewhat less if gas prices spike (combine errands, skip optional trips), but the response is small. Empirical estimates put short-run gasoline elasticity around 0.1 to 0.3.

d. Gasoline in the long run: much more elastic. Over a decade, drivers can buy more fuel-efficient cars or electric vehicles, can choose where to live relative to where they work, can adjust whether their household has one car or two. Long-run elasticity estimates are typically 0.5 to 0.8, two or three times the short-run figure. This time-horizon effect is general: most goods become more elastic the longer the price change persists.

e. Restaurant meals: elastic. Restaurant meals are largely a luxury (people can cook at home), they are a significant share of discretionary spending, and there are many alternatives (cheaper restaurants, takeout, home cooking). When restaurant prices rise faster than grocery prices, consumers shift to cooking at home, especially in recessions. Restaurant meals as a category have elasticity above 1.

f. Salt: inelastic. Salt is cheap (a tiny share of any household budget), it has no close substitutes for its function (seasoning, preservation), and it is consumed in small enough quantities that price barely matters. Even a 50% increase in salt prices would change household salt consumption almost not at all.

Bookstore pricing analysis:

The bookstore manager needs to know the price elasticity of demand for paperback novels at her store. The relevant question is not just how price-sensitive book buyers are in general, but how price-sensitive they are AT HER STORE versus alternatives.

If her store has elastic demand (E > 1), a 20% price increase will reduce quantity by more than 20%, and total revenue will fall. If her store has inelastic demand (E < 1), revenue will rise.

To estimate this, she might:
- Look at historical data: how have past price changes affected her sales?
- Check competitor prices: what is Amazon charging for the same titles? What about Barnes & Noble?
- Consider customer loyalty: are her customers walk-ins who would substitute easily, or repeat customers who value her selection and recommendations?

How the analysis differs for different sellers:

A small independent bookstore in a college town faces highly elastic demand. Her customers can drive to a competitor, order from Amazon (often at 30-40% discount), or buy used. If she raises prices 20%, many customers will substitute to these alternatives, and revenue will likely fall. The independent bookstore has very little pricing power on commodity products (new paperbacks of best-sellers). It can only compete on dimensions where the substitutes are weaker: curation, expert recommendations, community space, signed copies, the experience of browsing.

Amazon faces a much more complicated elasticity picture. For commodity titles, Amazon competes with itself across formats (Kindle, paperback, hardcover, audiobook) and faces some external competition from Barnes & Noble and a long tail of independents. Within its own ecosystem, Amazon has near-monopoly power for many titles. The elasticity of demand for paperbacks AT Amazon depends heavily on the elasticity of substitution to Kindle (which Amazon also sells, so a substitution does not cost Amazon a sale, just one with different margins). The economically interesting analysis for Amazon is not whether to raise paperback prices but how to price the bundle of formats to maximize total profit across the ecosystem.

The general lesson: pricing power is determined by the strength of substitutes the buyer faces. Both the independent bookstore and Amazon sell physical paperbacks, but they face very different substitute landscapes, so their optimal pricing differs. The independent's best move is to differentiate on dimensions Amazon cannot match (community, curation, in-person experience). Amazon's best move is to maximize the customer relationship across the full ecosystem rather than to extract maximum margin on any single product. In both cases, the analysis flows from elasticity, but the strategic implications could not be more different.`,
  },
  {
    id: "e2",
    number: 4,
    title: "Essay 2: Consumer Choice and Marginal Utility",
    points: 50,
    type: "essay",
    objectives: [
      "Apply the law of diminishing marginal utility and the utility-maximizing rule to consumer decisions.",
      "Evaluate the rational-choice model in light of behavioral economics findings on mental accounting, framing, and hyperbolic discounting.",
    ],
    reading: `Consumer theory explains how individuals allocate their limited income across competing goods to maximize their well-being (called 'utility' in economic terminology).

Total utility is the total satisfaction a consumer receives from consuming a good. Marginal utility is the additional satisfaction from consuming one more unit. The Law of Diminishing Marginal Utility states that as a person consumes more of a good, the marginal utility from each additional unit tends to decrease. Your first slice of pizza is delicious; your tenth slice is barely tolerable; your fifteenth is unwelcome.

The utility-maximizing rule: a consumer maximizes total utility when she allocates her income such that the marginal utility per dollar is equalized across all goods she purchases. Formally:

MU_A / P_A = MU_B / P_B = ... = MU_n / P_n

If marginal utility per dollar is higher for good A than for good B, the consumer should shift spending from B to A. As she buys more A, MU_A falls; as she buys less B, MU_B rises (it is on the high end of B's marginal utility curve). She continues shifting until the per-dollar marginal utilities are equal. At that point, no reallocation can improve her total utility.

This framework underlies the demand curve. When the price of a good falls, its marginal utility per dollar rises, and the consumer rationally buys more of it (substituting away from now-relatively-more-expensive alternatives) until equilibrium is restored. This is why demand curves slope down.

The framework has been criticized for assuming consumers behave more rationally than they actually do. Behavioral economics (Kahneman, Thaler, Tversky) documents systematic departures from the rational-choice model: framing effects, loss aversion, mental accounting, present bias, and so on.`,
    assignment: `Assignment (50 points):
Write a 600-800 word essay addressing the following:

1. Explain the law of diminishing marginal utility and the utility-maximizing rule. Use a concrete example.
2. Discuss at least three documented findings from behavioral economics that systematically violate the rational-choice model. Use specific examples (Thaler's mental accounting, Kahneman's framing effects, hyperbolic discounting, etc.).
3. Evaluate: should economic theory abandon rational-choice models in favor of behavioral approaches, or are rational-choice models still useful despite their limitations? Defend your position.`,
    modelResponse: `Model Response

Consumer Choice: Rational Models and Their Limits

Standard consumer theory holds that individuals maximize utility subject to a budget constraint. The mechanism is the law of diminishing marginal utility combined with the utility-maximizing rule, which together imply that consumers will allocate spending so that the last dollar spent on each good produces the same incremental satisfaction. This is the foundation of demand theory and, by extension, of much of microeconomic analysis.

A concrete illustration: suppose Anna has $20 and is choosing between books and coffee. Books cost $10, coffee $5. Her first book gives her 100 utils of satisfaction; the second only 60; the third only 30 (diminishing marginal utility). Her first coffee gives her 60 utils; the second 50; the third 30; the fourth 15. To maximize utility, she compares utility per dollar at each stage. The first book gives 100/10 = 10 utils per dollar. The first coffee gives 60/5 = 12 utils per dollar. So she buys coffee first. Now she has $15 left. The first book still gives 10 utils per dollar; the second coffee gives 50/5 = 10 utils per dollar. She is indifferent; suppose she buys the book. Now $5 left. The next coffee gives 50/5 = 10 utils per dollar. She buys it. Total utility: 60 + 100 + 50 = 210. The rational allocation, given her preferences and prices, equalizes marginal utility per dollar across her purchases.

This framework is parsimonious and makes useful predictions. It explains why demand curves slope downward, why people consume diverse bundles rather than specializing in a single good, and why income changes shift consumption patterns. For policy questions involving aggregate behavior across many people in routine markets, the rational-choice model often performs adequately.

But behavioral economics has documented systematic departures from this framework. Three particularly important findings deserve attention.

First, mental accounting. Richard Thaler showed that people treat money differently depending on its source or designated use, contrary to the rational-choice assumption that money is fungible. A person who would not spend $100 on a fancy dinner from her checking account might happily spend the same $100 from a 'vacation fund' or from gambling winnings. Tax refunds get spent more readily than the same amount earned through regular paychecks. People hold credit card debt at 20% interest while keeping savings in accounts earning 1%, because the savings account is labeled 'emergency fund' and is not allowed to be used to retire debt. The rational-choice model treats all dollars as identical; mental accounting shows they are not, in the head of the spender.

Second, framing effects. Kahneman and Tversky demonstrated that the same choice presented differently produces different decisions. Surgeons told that an operation has a 90% survival rate are more willing to recommend it than surgeons told that the same operation has a 10% mortality rate. Consumers asked to 'opt in' to a 401(k) participate at much lower rates than consumers automatically enrolled who must 'opt out,' even though the choice and consequences are identical. Loss aversion is the most powerful framing effect: people experience losses as roughly twice as painful as equivalent gains are pleasurable, which causes systematic deviations from expected utility theory. Investors hold losing stocks too long (to avoid realizing the loss) and sell winning stocks too quickly (to lock in the gain).

Third, hyperbolic discounting. Standard models assume people discount future rewards at a constant rate (exponential discounting). Empirical research shows they discount the near future much more steeply than the far future (hyperbolic discounting). A person offered $100 today or $110 tomorrow may take the $100; the same person offered $100 in 30 days or $110 in 31 days will typically take the $110. The choice is the same in structure, but the immediacy of the smaller reward in the first version overweighs it. This produces present bias: chronic procrastination, undersaving for retirement, addiction patterns, repeated failures to follow through on self-improvement plans. It also explains why pre-commitment devices (automatic 401(k) enrollment, Christmas savings accounts, locking up gym equipment) work: they bind the future self before the present self can renegotiate.

Should economics abandon the rational-choice model?

No, but it should be honest about what the model is for. The rational-choice model is a benchmark, not a description. It tells you what utility-maximizing behavior looks like, against which actual behavior can be measured and explained. For markets with experienced participants, repeated transactions, and clear feedback (commodity markets, much of financial markets, frequent consumer purchases), the rational model performs adequately because deviations get arbitraged away or because participants learn from their own mistakes. The model is a useful simplification.

For markets with infrequent purchases, ambiguous feedback, emotional content, and complex temporal dimensions (retirement savings, home buying, health care, education, insurance), the rational model is systematically misleading. The behavioral departures are large, persistent, and policy-relevant. A retirement system designed on the assumption that people will save the right amount on their own produces the chronic undersaving the U.S. observes. A health insurance system that requires complex annual choices produces the systematic suboptimal choices documented in Medicare Part D and exchange enrollments.

My position: economics needs both frameworks. Rational-choice models for the questions they answer well (aggregate demand response to price changes, comparative statics of well-functioning markets, long-run equilibrium). Behavioral models for the questions where the rationality assumption breaks down (retirement saving, choice architecture, addiction, present bias in policy contexts). Treating the rational model as universally valid is empirically wrong. Treating it as useless is methodologically lazy: the rational model is a benchmark we need precisely so that we can describe the deviations behavioral economics has identified. The right intellectual posture is to keep both tools in the box, and to apply each where it does the most work.`,
  },
  {
    id: "d3",
    number: 5,
    title: "Discussion 3: Production Functions and Cost Curves",
    points: 50,
    type: "discussion",
    objectives: [
      "Distinguish fixed from variable costs and short-run from long-run cost concepts in real businesses.",
      "Explain why long-run average cost curves take a U-shape, and why some industries scale further than others.",
    ],
    reading: `The production function describes the maximum output a firm can produce from given quantities of inputs. The simplest version: Q = f(L, K), where Q is output, L is labor, and K is capital.

Two crucial time horizons:
- The short run: at least one input (typically capital) is fixed. A restaurant cannot easily change the size of its dining room next week. It can only vary labor.
- The long run: all inputs are variable. Given enough time, the restaurant can rent a larger space, build out a new kitchen, hire more staff.

Short-run production exhibits diminishing marginal returns. Adding more workers to a fixed restaurant kitchen produces more meals at first (more hands to do the work) but eventually less per worker (kitchen gets crowded, workers get in each other's way, capital is the binding constraint).

Cost concepts in the short run:
- Fixed costs (FC): do not vary with output. Rent, equipment depreciation, salaried managers.
- Variable costs (VC): vary with output. Ingredients, hourly wages, electricity.
- Total cost (TC) = FC + VC.
- Average total cost (ATC) = TC / Q. Average cost per unit.
- Average variable cost (AVC) = VC / Q.
- Marginal cost (MC) = change in TC from producing one more unit.

Long-run cost curves: when all inputs are variable, the firm can choose the optimal scale. The long-run average cost (LRAC) curve typically has three regions:
- Economies of scale: ATC falls as output rises. A larger firm is more efficient (spreading fixed costs, specialization of labor and capital, bulk purchasing).
- Constant returns to scale: ATC is flat. The firm can replicate its operations at any size.
- Diseconomies of scale: ATC rises as output continues rising. Coordination becomes harder, bureaucracy grows, the firm becomes too big to manage well.

Industries with strong economies of scale at large output (utilities, semiconductors, aerospace) tend toward concentration. Industries with quick diseconomies (restaurants, hair salons) remain fragmented.`,
    assignment: `Assignment (50 points):
1. Distinguish between fixed and variable costs for each business:
   a. A pizza delivery restaurant
   b. An airline
   c. A software company that sells a SaaS product
   d. A wheat farm
2. Explain why the long-run average cost curve typically has economies of scale at low output, constant returns at moderate output, and diseconomies at high output. Then explain why some industries (utilities, semiconductor fabrication) exhibit economies of scale across nearly their entire output range, while others (restaurants, agricultural production) exhibit diseconomies of scale quickly. What features of an industry determine where it falls on this spectrum?`,
    modelResponse: `Model Response

Fixed and variable costs:

a. Pizza delivery restaurant:
- Fixed costs: rent on the building, equipment (ovens, walk-in freezer, point-of-sale system), insurance, salaried manager, advertising commitments, business loan payments. These costs continue whether the restaurant sells 100 pizzas or 1,000 pizzas per night.
- Variable costs: ingredients (flour, cheese, toppings), hourly wages for cooks and delivery drivers, electricity used for cooking, gas for delivery vehicles, packaging materials. These scale roughly proportionally with output.

b. Airline:
- Fixed costs: aircraft (whether leased or owned), gate fees at airports, salaries for pilots and flight attendants (who often have minimum-pay guarantees regardless of hours flown), terminal infrastructure, aircraft maintenance contracts. An airline that flies one passenger on a route pays roughly the same fixed costs as one that fills the plane.
- Variable costs: fuel (the largest single variable cost), in-flight meals/snacks, baggage handling per passenger, landing fees per flight, the marginal cost of adding one more passenger (essentially the catering and weight-related fuel, which is very small).
- The airline industry has extreme fixed-to-variable cost ratios: the marginal cost of adding one passenger to an already-scheduled flight is perhaps $20, while the fully-allocated cost might be $200. This is why airlines pursue load-factor maximization so aggressively.

c. SaaS company:
- Fixed costs: engineering salaries (the largest cost for most SaaS companies), product development, marketing, sales staff, office space, server infrastructure baseline, software licenses for development tools.
- Variable costs: cloud computing costs that scale with usage (AWS or Azure bills), payment processing fees, customer support staff in some configurations.
- SaaS is the most fixed-cost-heavy major business model. The marginal cost of serving one more customer is often near zero (an additional database record, a tiny amount of compute). This is why SaaS companies pursue scale so aggressively and why their margins expand sharply as they grow: each new customer pays full price but adds almost nothing to costs.

d. Wheat farm:
- Fixed costs: land (rent or amortized purchase), tractors and combines, irrigation infrastructure, farm buildings, property taxes, insurance, baseline operator labor.
- Variable costs: seeds, fertilizer, herbicides, fuel for equipment, hired seasonal labor, water (in regions where it is purchased), drying and storage costs.
- Wheat farming has high fixed costs in equipment and land but the variable costs are non-trivial. The marginal cost of producing one more acre of wheat is real and substantial.

Why long-run cost curves take a U-shape:

At low output levels, average costs are typically high because fixed costs are spread across few units. A restaurant that serves 20 meals per day allocates the entire rent over those 20 meals; the same restaurant serving 200 meals spreads the rent across ten times as many units, dramatically reducing average cost. This is the most basic source of economies of scale.

Beyond fixed-cost spreading, several mechanisms produce additional economies of scale at moderate output: specialization of labor (a small bakery has one person doing everything; a larger one has a head baker, a pastry chef, a cake decorator, each doing what she does best), specialization of capital (the larger firm can afford specialized equipment that pays for itself only at high volume), and bulk purchasing discounts (the chain restaurant pays less per pound for tomatoes than the single-location restaurant). All of these push average costs down as output rises.

At moderate output levels, the firm has captured most of these economies and ATC flattens out. The firm is roughly indifferent between different scales: doubling output produces roughly double the costs.

At high output levels, diseconomies of scale begin to dominate. The most important is coordination cost. As an organization grows, the number of communication paths between people grows roughly with the square of the number of people. Decisions take longer, information gets distorted as it travels through layers of hierarchy, and politics consume managerial attention. Bureaucracy grows. The firm becomes harder to align with its purpose, and increasingly large fractions of effort go into internal management rather than productive output.

Why some industries scale further than others:

Industries with strong, persistent economies of scale share several features.

First, large fixed costs relative to variable costs. Semiconductor fabrication requires a $20 billion fab that produces the same chips regardless of volume; once the fab is built, the marginal cost of an additional chip is tiny. The bigger the volume across which the fab cost is spread, the lower the per-chip cost.

Second, network effects in production or distribution. A larger logistics network is more efficient because routes can be optimized; this is why Amazon and FedEx scale efficiently. A larger telecom network is more valuable to customers, creating reinforcing demand-side scale.

Third, R&D-intensive products. Pharmaceuticals require $1+ billion in research to develop a drug, after which the marginal cost of producing a pill is pennies. The bigger the patient population, the lower the per-patient cost.

Fourth, regulatory complexity. Banking, healthcare, and energy industries have substantial fixed costs in compliance that favor larger firms.

Industries that exhibit quick diseconomies share opposite features.

First, the product or service is local and labor-intensive. Restaurants, hair salons, and dry cleaners cannot be efficiently centralized because the service must be delivered locally. The 'fab' for a restaurant is the kitchen, and there are no major economies in making the kitchen larger beyond a certain point.

Second, the work requires personal attention and judgment that does not scale. A law firm can grow by adding partners, but each major case requires senior judgment, and senior judgment does not multiply.

Third, quality differentiation matters and is hard to maintain at scale. Fine dining restaurants, custom carpentry, artisan bread bakeries: customers value the involvement of skilled individuals, which mass production cannot deliver.

Fourth, the industry has many local geographic markets without strong cross-market efficiencies. Agriculture is a borderline case: equipment exhibits economies of scale (the giant combine harvester) but the land itself is fixed and managing more land does not multiply yields proportionally.

The general principle: industries scale where fixed costs are large and replicable, where production is independent of geography, and where outputs do not require unique individual attention. Industries do not scale where geography is binding, where quality requires individual judgment, or where the production function exhibits decreasing returns at the unit of production. Where a firm sits on this spectrum determines its likely market structure, from monopolistic (utilities, semiconductor leaders) to fragmented (restaurants, hair salons).`,
  },
  {
    id: "e3",
    number: 6,
    title: "Essay 3: Perfect Competition and Monopoly",
    points: 50,
    type: "essay",
    objectives: [
      "Explain long-run equilibrium in a perfectly competitive market and the conditions under which firms earn zero economic profit.",
      "Analyze monopoly outcomes (patents, dominant tech platforms) and evaluate the trade-off between short-run pricing and long-run innovation.",
    ],
    reading: `Market structure refers to the organization of a market: how many firms there are, how easy it is to enter, what kind of product is sold, and how firms interact. The two polar cases are perfect competition and monopoly.

Perfect competition assumes:
- Many buyers and many sellers, none of whom is large enough to affect the price.
- A homogeneous product. All sellers offer the same thing.
- Free entry and exit. No barriers prevent new firms from entering or existing firms from leaving.
- Perfect information. All participants know prices and product characteristics.

Under these conditions, each firm is a 'price taker': it can sell as much as it wants at the market price, but nothing at any higher price (because customers will substitute to other identical sellers). In long-run equilibrium, firms earn zero economic profit. Any positive profit attracts entry, which lowers price; any negative profit triggers exit, which raises price. The market produces the quantity at which marginal cost equals price, and this is socially efficient: all mutually beneficial trades occur.

Monopoly is the opposite extreme:
- A single seller.
- A product with no close substitutes.
- High barriers to entry: patents, network effects, control of essential resources, economies of scale large enough that one firm can supply the entire market more cheaply than several.

A monopolist sets price by choosing the quantity that maximizes profit. Marginal revenue is less than price (because to sell one more unit, the monopolist must lower price on all units). The monopolist produces where marginal revenue equals marginal cost, which is less than the socially efficient quantity. Consumers pay higher prices and consume less than in competitive markets. There is deadweight loss: trades that would create value do not occur.

Real markets typically lie between these extremes: monopolistic competition (many firms, differentiated products: restaurants, books) and oligopoly (few firms with strategic interaction: airlines, automobiles, smartphone OS).`,
    assignment: `Assignment (50 points):
Write a 700-900 word essay addressing the following:

1. Explain the long-run equilibrium of a perfectly competitive market. Why do firms earn zero economic profit in the long run?
2. Analyze the case of a patent-protected pharmaceutical. The drug costs $2 to produce but sells for $500. Is this inefficient? Defend your answer carefully, distinguishing between short-run and long-run incentive effects.
3. Consider the case of Google in search advertising. Google has roughly 90% market share globally. Is this a monopoly? What features of the search advertising market make this market structure persistent? Should regulators break up Google?`,
    modelResponse: `Model Response

Market Structure from Wheat to Search Advertising

Perfect competition is an idealization that no real market quite achieves, but the conceptual apparatus is useful for understanding what efficient markets look like and why monopolies depart from it. In a perfectly competitive market, every seller faces a horizontal demand curve at the market price. The seller cannot raise her price without losing all customers (they go to identical alternatives), and she has no reason to lower it (she can sell all she wants at the market price). Her profit-maximizing decision is to produce the quantity where her marginal cost equals the market price.

In the long run, this market produces zero economic profit. The mechanism is entry and exit. If existing firms are earning positive economic profit, that profit signals to potential entrants that this is an attractive market. New firms enter, total supply expands, and the market price falls until profits are competed away. Conversely, if existing firms are earning losses, some exit, supply contracts, and price rises until the remaining firms break even. Long-run equilibrium is where no one can do better than her next-best alternative.

Wheat farming approximates this. There are many farmers, the product is essentially homogeneous (graded by quality but otherwise interchangeable), entry is technically free (land is available, equipment can be financed), and information is good (futures markets and weather data are widely available). Wheat farmers are price takers; the price is set globally by aggregate supply and demand. Profitable farms attract more land into wheat cultivation; unprofitable ones exit (sell land, switch crops). In the long run, wheat farms earn approximately zero economic profit, which is why agricultural policy uses subsidies and price supports to maintain rural incomes that the market would otherwise compete down.

The patent-protected pharmaceutical case:

A drug costing $2 to produce but selling for $500 is a classic monopoly outcome. The patent gives the manufacturer the legal right to be the only seller for typically 20 years from filing. With no close substitutes, the manufacturer faces a downward-sloping demand curve and prices substantially above marginal cost.

Is this inefficient? In the short-run sense yes; in the long-run sense, no, and the trade-off is fundamental.

Short run: with the drug already developed, the socially optimal outcome would be to sell at marginal cost ($2). Every patient willing to pay $2 or more receives the drug, generating maximum total benefit. The actual outcome (price $500) means many patients who would have valued the drug at $300 do not receive it. Their willingness to pay exceeds the actual cost of providing the drug, but no transaction occurs. This is deadweight loss, and it is real.

Long run: the drug had to be developed before it could be priced. Pharmaceutical R&D typically costs $1-2 billion per approved drug, with most candidates failing along the way. No one would invest this capital without the prospect of monopoly profit during the patent window. If new drugs were forced to sell at marginal cost from the start, drug development would not happen. The patent system is a deliberate trade-off: short-run inefficiency (high prices, deadweight loss during the patent window) in exchange for long-run innovation (drugs that exist at all). Once the patent expires, generic competition typically reduces prices to near marginal cost, and the social benefit is captured by everyone.

The argument for the patent system is that the long-run gain in innovation outweighs the short-run inefficiency. The arguments against it are that patent terms are too long, that some products achieve monopoly through evergreening (small modifications to extend patent life), that prices in the U.S. are inflated by the absence of negotiated pricing that other developed countries use, and that the system rewards me-too innovation more than breakthrough innovation. These are real problems but they are problems with the implementation of the patent system, not with the patent concept itself. The basic trade-off is unavoidable: appropriable returns are necessary to incentivize the kind of investment that produces drugs we now take for granted.

Google in search advertising:

Google has approximately 90% of the global search market. By most definitions, this is a monopoly or near-monopoly position. The market structure has persisted for two decades despite occasional challengers (Bing, DuckDuckGo, Yandex) and despite the absence of legal barriers to entry.

Why is the structure persistent? Three reinforcing features.

First, scale economies in the technology. Search quality improves with more queries because the system learns from user behavior (which results get clicked, which lead to further searches). Google has trillions of queries to learn from; competitors have orders of magnitude fewer. The data advantage compounds.

Second, network effects on the advertiser side. Advertisers want to be where the users are, and users are on Google, so advertisers spend on Google, which funds further investment in search quality, which keeps users on Google. The two-sided market reinforces itself.

Third, default position. Google pays approximately $20 billion per year to Apple to remain the default search engine on iPhones. The U.S. v. Google antitrust case in 2024 found that this practice illegally maintained monopoly power, exactly because users typically do not change defaults, so the default position is decisive in market share.

Should regulators break up Google? The answer is more complicated than either 'yes' or 'no.'

Arguments for intervention: persistent monopoly profits in search advertising represent a tax on the rest of the economy. The 2024 antitrust ruling found genuine harms to competition. Breaking Google's search business away from its other businesses (YouTube, Android, ad tech) could reduce cross-leveraging that maintains the monopoly. Forcing divestiture of Chrome and Android would weaken Google's ability to maintain default position.

Arguments against breakup specifically: search advertising exhibits genuine economies of scale and network effects, so breakup might just produce a different monopolist after the dust settles. The benefits to users from a unified Google ecosystem (services that interoperate) are real, even if the firm extracts substantial profit from them. Other interventions (mandated portability of search history, prohibition of default-position payments, ad-market transparency) might address the harms without the disruption of structural breakup.

My position: the question is not 'monopoly versus competition' in the abstract but 'what specific remedies address specific harms.' Breakup is a heavy intervention with uncertain effects. The cleaner remedies are: prohibit default-position payments (which the 2024 ruling already moves toward), require interoperability with competing search providers, mandate transparency in the advertising auction (Google's own employees have testified that the auction is manipulated in non-transparent ways). These remedies preserve the legitimate benefits of scale while curbing the practices that prevent competition from disciplining the market. Pharmaceutical patents and search dominance both involve trade-offs between short-run pricing and long-run incentives. The answer in both cases is to fine-tune the structure of the trade-off, not to abolish the trade-off itself.`,
  },
  {
    id: "d4",
    number: 7,
    title: "Discussion 4: Externalities and Market Failure",
    points: 50,
    type: "discussion",
    objectives: [
      "Identify negative and positive externalities in everyday markets and propose appropriate Pigouvian or regulatory responses.",
      "Compare carbon taxes and cap-and-trade as solutions to the climate externality, and explain the political-economy obstacles to either.",
    ],
    reading: `Externalities are costs or benefits of a transaction that fall on third parties not involved in the transaction. They are a major form of market failure: situations where free markets do not produce efficient outcomes.

Negative externalities (costs imposed on others):
- Pollution: a factory that produces chemicals also produces air pollution that harms nearby residents. The factory does not pay for this harm, so it produces too much (from a social standpoint).
- Traffic congestion: each additional car on the highway slows down all the others.
- Antibiotic overuse: contributing to antibiotic resistance that harms future patients.
- Loud music in apartments: imposes costs on neighbors without compensation.

Positive externalities (benefits conferred on others):
- Vaccination: protects not just the vaccinated person but also reduces disease transmission to others.
- Education: educated workers benefit society beyond their own wages (better citizens, more innovation).
- Beekeeping: bees pollinate nearby crops without the beekeeper being paid.
- Beautiful gardens: visible to neighbors and passersby.

In a free market, transactions occur when private benefits exceed private costs. Externalities create a gap between private and social benefits or costs. Markets produce too much of goods with negative externalities (because producers do not bear the full cost) and too little of goods with positive externalities (because producers do not capture the full benefit).

Possible solutions:
- Pigouvian taxes: tax negative externalities at the level of the marginal external cost. The tax internalizes the externality.
- Pigouvian subsidies: subsidize positive externalities.
- Regulation: command-and-control rules (emissions limits, mandatory vaccination).
- Tradable permits: cap-and-trade systems for emissions.
- Coase's theorem: if property rights are clearly defined and transaction costs are low, parties can negotiate efficient outcomes regardless of which side has the rights. In practice, transaction costs are often high enough to make this impractical.`,
    assignment: `Assignment (50 points):
1. Identify the externality in each scenario and propose a policy response:
   a. A coal power plant emits sulfur dioxide that causes acid rain in neighboring states.
   b. A university research lab develops a basic technique that other firms can use freely.
   c. A person decides whether to get a flu vaccine.
   d. A factory dumps waste into a river that downstream communities use for drinking water.
2. Carbon dioxide emissions are the largest environmental externality of our time, projected to cause trillions of dollars in damage over the century. Compare two policy approaches: a carbon tax (Pigouvian tax) and cap-and-trade. What are the strengths and weaknesses of each? Why has the U.S. been politically incapable of implementing either at federal level?`,
    modelResponse: `Model Response

Externality identification and policy responses:

a. Coal plant emitting sulfur dioxide:

Negative externality. The plant's profits do not reflect the harm done by acid rain (damaged crops, harmed forests, accelerated weathering of buildings, respiratory disease). The plant produces electricity at private cost that is much lower than social cost, so it produces too much of it relative to the social optimum. Standard policy response: an emissions tax or tradable permits. The U.S. Acid Rain Program (1990 Clean Air Act amendments) used cap-and-trade for sulfur dioxide and was extraordinarily successful, reducing SO2 emissions by 88% from 1990 to 2018 at a fraction of the predicted cost.

b. University research lab developing a basic technique:

Positive externality. The lab develops a technique (a statistical method, a chemical synthesis pathway, an algorithm) that other firms can use without paying. The lab is not compensated for the value its work generates downstream. Result: too little basic research from a social standpoint. The market by itself would produce inadequate basic research because the appropriability is too low. Standard policy response: government funding of basic research (NSF, NIH), tax credits for R&D, and a patent system that lets some applied research be appropriated (though basic techniques often cannot be patented). The U.S. has historically done this well, with federal funding of university research producing economic returns far in excess of its cost. The recent reduction in basic research funding as a share of GDP is a concerning departure from this model.

c. A person deciding whether to get a flu vaccine:

Positive externality. The vaccinated person not only reduces her own risk of getting the flu but also reduces transmission to others. Each additional vaccinated person contributes to herd immunity. From the individual's standpoint, the cost (time, money, brief side effects) may exceed the personal benefit (modest reduction in flu risk). But the social benefit exceeds the private benefit. Result: too few people vaccinate. Policy responses: subsidize vaccination (free flu shots through insurance), require vaccination for certain activities (school attendance, healthcare work), social marketing campaigns that emphasize the broader effect, and in extreme cases (smallpox, polio) make vaccination mandatory.

d. Factory dumping waste into a river:

Negative externality of the most direct kind. Downstream water users bear costs the factory does not pay. Coase's theorem is technically relevant here: if the downstream community has clear property rights to clean water, the factory must compensate them or stop polluting; if the factory has clear rights to dump, the community could pay it to stop. In practice, transaction costs are prohibitive (thousands of downstream users, ambiguous attribution of harm, intertemporal effects). Policy response: regulation through the Clean Water Act, with discharge permits that limit allowable pollutants, and liability for damages from spills. This combines a quasi-property-rights approach (the permit system) with regulatory minimums.

Carbon emissions: tax versus cap-and-trade.

Both are well-established mechanisms for addressing emissions externalities. The basic logic is identical: make polluters pay for the harm they cause, which internalizes the externality and creates incentives for emissions reductions. The differences are in what is fixed and what varies.

A carbon tax fixes the price of emissions (say, $100 per ton of CO2) and lets the quantity adjust. Firms emit only when the value of the activity exceeds $100 per ton; below that threshold, they reduce emissions. The quantity reduction depends on how responsive firms are at that price. The advantage: predictable price, simple to administer, revenue can fund tax cuts or rebates. The disadvantage: emissions level is uncertain, particularly under economic growth or unexpected technology changes.

Cap-and-trade fixes the quantity of emissions (say, 5 billion tons of CO2 annually) and lets the price adjust through trading of permits. Each permit represents the right to emit one ton; firms that find emissions reductions cheaper sell permits to firms for which reductions are expensive. The advantage: certain quantity outcome, market discovers the price. The disadvantage: price volatility (which discourages long-term investment), administrative complexity, and political vulnerability to allocation of free permits (which gives windfalls to incumbents).

Empirical record: the EU Emissions Trading System uses cap-and-trade and has been operating since 2005. Initially plagued by over-allocation and price collapse, it has matured into a reasonably functioning market. The California cap-and-trade system is also operational and has produced measurable emissions reductions. British Columbia adopted a carbon tax in 2008 with revenue recycling (the revenue funds offsetting tax cuts); it is widely cited as a success.

Theory says the two systems should produce similar outcomes if calibrated to the same target. The choice between them is mostly a question of which constraint matters more: certainty about the quantity (favoring cap-and-trade) or certainty about the price (favoring a tax). Most economists, asked to choose, lean toward a carbon tax for its administrative simplicity and price predictability. Most environmentalists prefer cap-and-trade for its quantity certainty, given the urgent need to keep cumulative emissions below climate-stability thresholds.

Why has the U.S. failed to adopt either federally?

Three reasons. First, the costs are concentrated and the benefits are diffuse. Energy producers, energy-intensive manufacturers, and fossil-fuel-heavy regions face concrete costs from either policy. The benefits (reduced climate damage in future decades, globally distributed) are abstract and largely captured by others. Concentrated losers organize politically; diffuse winners do not.

Second, climate has become tribally polarized. Carbon pricing is identified with the political left, which makes it impossible for the right to adopt without political damage, regardless of intellectual merits. Economists across the spectrum have been remarkably unified in supporting some form of carbon pricing (over 3,500 economists signed an open letter in 2019), but the political coalition that would pass it does not exist.

Third, the U.S. constitutional structure produces extreme veto points. To pass a major federal program, you need a majority of the House, 60 votes in the Senate (effectively), a presidential signature, and survival of court challenges. Any one of these can block, and the supermajority Senate threshold is particularly binding when 30+ Senate seats come from carbon-intensive states.

The U.S. has instead pursued de facto carbon policy through tax credits (the Inflation Reduction Act's clean energy subsidies, $370+ billion through 2032) and regulation (EPA emissions standards). This approach is far less efficient than carbon pricing but politically feasible. It is paying carbon emitters to emit less rather than charging them for emitting at all. The cost per ton of CO2 reduction is several times higher than under a carbon tax achieving the same emissions cut, but the political coalition for this approach exists where the coalition for pricing does not. Whether the inefficiency is worth the political feasibility depends on whether one views carbon policy as a long-run optimization or as a short-run scramble to do whatever can actually pass. Most current evidence suggests the political constraint is binding, and the best available policy is what gets adopted, not what would be best in a more rational political system.`,
  },
  {
    id: "e4",
    number: 8,
    title: "Essay 4: Game Theory and Strategic Interaction",
    points: 50,
    type: "essay",
    objectives: [
      "Explain the Prisoner's Dilemma and the conditions under which rational individual behavior produces collectively suboptimal outcomes.",
      "Apply repeated-game logic to real cartels, treaties, and institutional design, and evaluate when cooperation can be sustained.",
    ],
    reading: `Game theory studies strategic decision-making: situations where the outcome for each participant depends on the choices of all participants. It is the central tool for analyzing oligopoly, bargaining, auctions, voting, and many other settings where the simple supply-and-demand framework is inadequate.

Key concepts:

- A strategy is a plan of action for each situation a player might face.
- A Nash equilibrium is a combination of strategies such that no player can improve her outcome by unilaterally changing strategy. Named for John Nash (1950).
- A dominant strategy is one that produces a better outcome for a player regardless of what the others do.
- A zero-sum game is one in which one player's gain equals another's loss. Most real economic interactions are not zero-sum.

Classic examples:

The Prisoner's Dilemma: two prisoners are separately offered a deal. If both stay silent, both get 1 year. If both confess, both get 5 years. If one confesses and the other stays silent, the confessor goes free and the silent one gets 10 years. Each prisoner's dominant strategy is to confess, regardless of what the other does. Both confess and get 5 years, even though both would be better off if both stayed silent (1 year each). The Nash equilibrium (both confess) is not the Pareto-optimal outcome.

Coordination games: two restaurants benefit from being on the same block (foot traffic spillover), but each prefers to be on a different block to avoid competition. Multiple equilibria; the outcome depends on coordination.

The Stag Hunt: two hunters can cooperate to catch a stag (large payoff each) or hunt rabbits alone (smaller payoff each). If both cooperate, both gain. But cooperating requires trust; defecting (rabbit hunting) is safer.

Repeated games: when a game is played repeatedly with the same partners, cooperation can become rational. Tit-for-tat (start by cooperating; then mimic the partner's previous move) is a remarkably effective strategy.`,
    assignment: `Assignment (50 points):
Write a 600-800 word essay addressing the following:

1. Explain the Prisoner's Dilemma and why it produces a suboptimal outcome despite rational behavior by both players.
2. Apply game theory to a real-world economic situation: OPEC oil production, R&D investment by competing firms, or environmental treaties between countries. Identify the players, the strategies, the payoffs, and the Nash equilibrium.
3. Explain how repeated interaction can sometimes resolve the Prisoner's Dilemma. What conditions make cooperation more likely?`,
    modelResponse: `Model Response

Game Theory: Why Rational Players Sometimes Lose

The Prisoner's Dilemma is the most studied result in game theory because it captures a haunting feature of strategic interaction: rational individual behavior can produce collectively irrational outcomes. Each prisoner, looking at her options, sees that confessing is better than staying silent regardless of what the other does. If the partner stays silent, confessing yields 0 years (versus 1 year for staying silent). If the partner confesses, confessing yields 5 years (versus 10 for staying silent). Confessing is dominant. So both prisoners confess. Both get 5 years. Both would have preferred the outcome where neither confessed (1 year each), but neither could rationally choose silence given the other's incentives. The Nash equilibrium is not the Pareto-optimal outcome.

This is not a paradox. It is a feature of certain incentive structures. When the gains from defection exceed the gains from cooperation conditional on the other's choice, defection emerges even when everyone would be better off cooperating. The implication is sobering: rational behavior by each is not a guarantee of collective rationality.

OPEC and the prisoner's dilemma of cartels:

OPEC is a near-perfect real-world example. Suppose Saudi Arabia and the other OPEC members agree to limit oil production to support a price of $80/barrel rather than letting it drift to $50 under competition. Each member commits to a production quota. The collective outcome (cartel discipline) produces high revenue for everyone.

But each member individually has a strong incentive to cheat. If the others stick to their quotas and one country secretly produces a bit more, that country sells at the maintained high price and captures the gain from extra volume. The temptation is enormous, especially for countries facing fiscal pressure. If everyone cheats, the price collapses. If no one cheats, everyone wins. The dominant individual strategy is to cheat (just a little), and the equilibrium is widespread cheating with prices below what the cartel intended.

OPEC has struggled with this exact dynamic for fifty years. The 1986 oil price collapse was a result of cheating across the cartel; Saudi Arabia, having held production down to support prices, decided to flood the market to discipline cheaters, and prices crashed from $30 to $10 per barrel. The 2014-2016 price collapse similarly reflected OPEC discipline breaking down. The cartel intermittently re-coheres (via the OPEC+ arrangement with Russia in recent years), but the underlying incentive structure means cooperation is always fragile.

Players: OPEC member countries. Strategies: hold production at quota (cooperate) or exceed quota (defect). Payoffs: cooperation produces high prices and shared revenue; defection produces individual gain at the cartel's expense. Nash equilibrium under one-shot play: everyone defects, prices fall. The cartel only holds together to the extent that the game is repeated (members can punish cheaters in the future) and that members have political reasons to value long-term cooperation over short-term gain.

How repeated interaction changes everything:

In a one-shot Prisoner's Dilemma, defection dominates. In a repeated game with the same players, this changes. Each player knows that defection today will be punished by defection tomorrow. If the future matters enough (low discount rate, long time horizon, high probability of continued interaction), cooperation can be sustained as an equilibrium.

Robert Axelrod's famous 1980s tournament asked researchers to submit computer strategies for playing a repeated Prisoner's Dilemma. The winning strategy was tit-for-tat: cooperate on the first move, then mirror whatever the opponent did on the previous move. This strategy is nice (it never defects first), retaliatory (it punishes defection immediately), forgiving (it returns to cooperation as soon as the opponent does), and clear (the opponent can easily predict its behavior).

Tit-for-tat sustains cooperation when both players use it because the immediate gain from defection is followed by punishment in the next round, which over time costs more than the one-shot gain. Variants (generous tit-for-tat, which occasionally forgives defection to escape mutual punishment cycles; tit-for-two-tats, which only punishes after two defections) perform similarly well in environments with noise.

The conditions that make cooperation more likely:

First, the shadow of the future. Cooperation is easier when players expect to interact many more times and discount the future modestly. A merchant in a small village (everyone interacts repeatedly) is more likely to be honest than a merchant in a transient highway truck stop (one-shot interactions dominate). Countries in long-standing trade relationships cooperate more readily than ones in volatile bilateral relationships.

Second, reputation mechanisms. Even one-shot games can become quasi-repeated if reputations carry across interactions. A firm dealing with thousands of customers, each in a one-shot relationship, behaves as if each interaction were part of a long-running game, because cheating one customer affects many through reviews and word-of-mouth.

Third, the size and stability of payoffs. Cooperation is harder when defection produces large immediate gains and when relationships are unstable. OPEC's cooperation is harder during oil price spikes (when cheating is highly tempting) than during stable price periods.

Fourth, group size. Small groups can monitor each other; large groups cannot. OPEC has 13 members plus 10 associated countries (OPEC+), and monitoring is genuinely difficult. The U.S. dairy industry has tens of thousands of producers, which is why dairy 'cartels' are unstable without government support.

Fifth, communication and norms. The ability to talk about the situation, to develop shared expectations and shared moral language, helps coordinate on cooperative equilibria. This is part of why international institutions matter even when they cannot directly enforce: they create venues for the conversation that sustains norms.

The Prisoner's Dilemma is not destiny. The dilemma exists in environments where defection is rewarded and cooperation is exposed. Many economic and political institutions can be understood as attempts to transform Prisoner's Dilemma situations into repeated games with reputation mechanisms (the legal system, professional licensing, credit ratings, the Better Business Bureau, international treaties with monitoring provisions). When these mechanisms work, cooperation can be sustained even though the underlying incentives would, in isolation, produce defection. When they fail, the underlying dilemma reasserts itself: trust collapses, the cartel falls apart, the treaty breaks down, the economy reverts to a lower-cooperation equilibrium. The art of institutional design is largely the art of converting Prisoner's Dilemmas into games where cooperation is sustainable.`,
  },
  {
    id: "d5",
    number: 9,
    title: "Discussion 5: Labor Markets and Wage Determination",
    points: 50,
    type: "discussion",
    objectives: [
      "Use multiple frameworks (productivity, supply and demand, compensating differentials, monopsony) to explain wage differences across occupations.",
      "Evaluate the major explanations for rising U.S. wage inequality since 1980 (skill-biased technical change, declining unions, globalization).",
    ],
    reading: `Labor markets determine the wages paid to workers and the quantities employed. The basic model treats labor like any other market: the demand for labor comes from firms hiring workers; the supply of labor comes from workers offering their time. The equilibrium wage is where supply meets demand.

But labor markets have several distinctive features that complicate this simple picture:

- Heterogeneity: workers differ in skills, experience, education, and many other dimensions. The 'labor market' is really thousands of markets for different kinds of work.
- Search frictions: matching workers to jobs takes time. Vacancies and unemployed workers coexist because finding the right match is costly.
- Monopsony power: in many local markets, one or a few employers dominate. A single hospital chain in a small city; Amazon as a major employer in a logistics hub. Monopsony power reduces wages below competitive levels because workers have few alternatives.
- Compensating wage differentials: jobs that are dangerous, dirty, or unpleasant must pay more to attract workers. A coal miner earns more than a similarly-skilled office worker.
- Human capital: workers accumulate skills through education and experience. Differences in human capital explain most of the variation in wages across workers.
- Discrimination: identical workers can be paid differently based on race, gender, age, and other characteristics. Becker (1957) argued that competition tends to erode discrimination over time; empirical evidence shows it persists more than the theory predicts.
- Unions and collective bargaining: where workers bargain collectively, wages can rise above the competitive level. The U.S. has low unionization (10%) compared to most developed countries.

The U.S. labor market has seen striking changes in recent decades: rising wage inequality, declining labor share of GDP, declining geographic mobility, and an expansion of credentialing requirements for many jobs.`,
    assignment: `Assignment (50 points):
1. Explain why a software engineer typically earns more than a teacher, even though teachers often have more education. Use multiple frameworks (productivity, supply and demand, compensating differentials, monopsony) to give a complete answer.
2. The U.S. has seen rising wage inequality since 1980, with the gap between top earners and median workers widening substantially. What are the major explanations economists have proposed? Skill-biased technical change, declining unions, globalization, immigration, or institutional changes? Evaluate at least three.`,
    modelResponse: `Model Response

Why software engineers earn more than teachers:

Several mechanisms contribute, and a complete answer requires all of them. The naive intuition that 'more educated workers earn more' is incomplete because the relationship between education and wages depends on what the education leads to, not just how much there is.

Productivity (marginal revenue product). The wage a firm is willing to pay is bounded by the worker's marginal revenue product: how much additional revenue she generates. A software engineer at a successful tech company often generates millions of dollars in revenue: a single feature can serve millions of users at near-zero marginal cost, and the engineer's contribution is directly traceable to scalable output. A teacher's productivity, while genuinely valuable, is bounded by the number of students she can teach (roughly 30 at a time, with diminishing returns to class size). The engineer's output is high-leverage and software-mediated; the teacher's output is bounded by the in-person service model.

Supply and demand. The supply of qualified software engineers is much smaller than the supply of qualified teachers, relative to the demand for each. Becoming a competent professional software engineer requires aptitude for abstract problem-solving plus several years of study or experience plus continual updating as technologies evolve; the population that can do this well is relatively small. Becoming a competent teacher requires different skills (patience, content knowledge, classroom management) that are also valuable, but the supply pool is larger relative to demand. Public schools also face a budget constraint: their willingness to pay is capped by the property tax base and political constraints, while tech firms compete in product markets that reward scaling.

Compensating wage differentials. Teaching is generally considered a meaningful, mission-driven occupation. People are willing to teach for less than they would accept for less-meaningful work; the psychological compensation reduces the necessary monetary compensation. Software engineering involves more isolated work, often less directly social, and the work itself is generally not considered intrinsically rewarding by everyone who does it (though some find it deeply engaging). The compensating differential runs the other direction: software pays more partly because it asks for skills that the typical engineer might rather use for something else if compensation were equal.

Monopsony power. Public school teaching is essentially a monopsony in many local labor markets: the school district is the only major employer of K-12 teachers, and teachers' ability to negotiate is limited. Software engineers can move freely between many employers, including across geographies (remote work) and into self-employment (contracting, startups). The competitive labor market for engineers transmits their full marginal product into their wages; the monopsonistic labor market for teachers suppresses their wages below their marginal product.

Capture of returns. A software engineer at a successful startup can be paid in equity, capturing some of the upside of a high-variance outcome. Teachers in public schools earn essentially salary-only, with no upside participation in the long-term value created. Across many tech engineers, the option-like upside contributes meaningfully to average compensation.

The result is that two equally-educated workers can have very different earnings because the systems they work in convert their productivity into wages very differently. None of these mechanisms is sufficient on its own; the full explanation requires all of them.

Explanations for rising U.S. wage inequality since 1980:

The data: in 1980, the top 10% of U.S. earners made about 9 times the bottom 10%. By 2020, the ratio was about 18. The 95th percentile of household income roughly doubled in real terms over this period while the median grew much less and the bottom quintile barely moved. Multiple causes contribute.

Skill-biased technical change (SBTC). The most-cited explanation among labor economists. Technology has substituted for routine cognitive and manual work (manufacturing assembly, clerical work, basic accounting) while complementing high-skill cognitive work (analysis, creativity, judgment). The result is hollowing-out: jobs in the middle of the skill distribution have shrunk, while jobs at the top have grown and rewarded their workers more, and low-skill service jobs that resist automation (food service, retail, healthcare) have grown without wage gains. The empirical evidence is strong: industries and occupations most exposed to automation show the steepest wage compression at the middle and steepest growth at the top.

Strength: Explains the shape of inequality (rising at top, hollowing middle) better than alternatives. Quantitative models of SBTC fit the observed wage distribution reasonably well.

Weakness: Cannot fully explain why the U.S. saw more inequality growth than countries with similar technology adoption (Germany, Japan). Suggests institutions matter alongside technology.

Declining unions. In 1980, 20% of U.S. private-sector workers belonged to unions. By 2020, the figure was under 7%. Unions had compressed wage distributions by raising wages at the bottom and middle of the union sector and creating spillover effects in non-union firms. As union density fell, this compression weakened. The decline matches the timing of inequality growth almost exactly. Bivens and Mishel (2021) attribute roughly one-third of the rise in wage inequality among men to declining unionization.

Strength: Strong temporal correlation. The countries that maintained higher unionization (Germany, much of Scandinavia) maintained more compressed wage distributions despite similar technology.

Weakness: Unionization decline is partly endogenous to the same forces (deindustrialization, globalization). Cannot fully explain inequality at the top, which involves earners in industries that were never heavily unionized.

Globalization. The integration of China and other developing economies into the world economy added roughly 1 billion workers to the global labor pool over 25 years. This created competition for U.S. workers in tradable manufactured goods. Autor, Dorn, and Hanson's 'China shock' research showed that U.S. counties more exposed to Chinese import competition experienced sharper declines in manufacturing employment, wages, and labor force participation, with effects persisting for decades.

Strength: Direct evidence of competitive pressure on specific U.S. workers in specific regions. The communities most affected by Chinese competition have not recovered.

Weakness: Global manufacturing employment in absolute terms is less than 10% of U.S. employment. Globalization explains regional concentration of harm but cannot explain the much broader patterns of wage stagnation across the entire bottom of the distribution.

My assessment:

All three explanations are partially correct. The honest answer is that no single explanation suffices; rising inequality has multiple reinforcing causes. SBTC explains the most variance among economists who have studied the question, but it explains the shape rather than the magnitude; the magnitude depends on institutional choices (unions, minimum wages, tax policy, education) that other countries made differently from the U.S. The U.S. experience is therefore an interaction of common pressures (technology, globalization) with distinctive institutional responses (declining unions, less progressive taxation, weaker labor market regulation).

The policy implication: technology and globalization are largely fixed; the difference between the U.S. inequality experience and that of similar economies lies mostly in the policy responses available to limit how technology and globalization translate into wage inequality. The U.S. chose to let market forces operate with less institutional buffering than its peers. The result was more inequality, more concentration of growth at the top, and a political-economic configuration in which the lost middle has become a major political force without yet finding stable policy expression.`,
  },
  {
    id: "e5",
    number: 10,
    title: "Essay 5: Public Goods and Collective Action Problems",
    points: 50,
    type: "essay",
    objectives: [
      "Distinguish private goods, public goods, club goods, and common-pool resources, and explain why standard markets work or fail for each.",
      "Evaluate the tragedy of the commons and Ostrom's framework for community self-governance, and identify when each remedy works.",
    ],
    reading: `Public goods have two distinctive features: they are non-rivalrous (one person's consumption does not reduce what is available to others) and non-excludable (it is difficult or impossible to prevent non-payers from consuming them).

Examples: national defense, basic scientific research, lighthouses, public radio, clean air. If a lighthouse is built, every passing ship benefits whether or not its owner contributed to the cost.

The free-rider problem: rational individuals have an incentive to consume public goods without paying for them. If others provide it anyway, the free-rider gets it free. If others do not provide it, no individual contribution is enough to provide it alone. So no one contributes, and the good is underprovided or not provided at all.

This produces market failure: even when the total social benefit of a public good far exceeds its cost, private markets fail to provide it. Government provision (funded by taxation, which forces all beneficiaries to contribute) is the standard solution.

Pure public goods are rare. Most goods are partly excludable, partly rivalrous, or both. The full taxonomy:

- Private goods (rivalrous, excludable): food, clothing, cars. Standard markets work fine.
- Public goods (non-rivalrous, non-excludable): national defense, lighthouses, basic research.
- Club goods (non-rivalrous, excludable): cable TV, gym memberships, software-as-a-service. Private firms can provide these by charging access fees.
- Common-pool resources (rivalrous, non-excludable): ocean fisheries, groundwater aquifers, public grazing land. The 'tragedy of the commons' applies: individuals overconsume because the cost is shared while the benefit is private.

Elinor Ostrom's Nobel Prize work documented how communities sometimes self-govern common-pool resources successfully through local institutions, monitoring, and graduated sanctions, escaping the tragedy of the commons even without formal property rights or government intervention.`,
    assignment: `Assignment (50 points):
Write a 700-900 word essay addressing the following:

1. Distinguish carefully between public goods, club goods, common-pool resources, and private goods. Give an example of each and explain why standard markets work or fail for each.
2. Discuss the 'tragedy of the commons' using a specific example: ocean fisheries, the depletion of groundwater aquifers (e.g., the Ogallala), or carbon emissions. What mechanisms have been used to address it?
3. Evaluate Ostrom's argument that local communities can successfully manage common-pool resources without state intervention. What are the conditions under which this works, and where does it fail?`,
    modelResponse: `Model Response

Public Goods and the Logic of Collective Failure

The four-fold typology of goods (private, public, club, common-pool) is one of the most useful organizing frameworks in economics because it identifies, for each combination of rivalry and excludability, what kind of institution is needed to provide the good efficiently.

Private goods are rivalrous (your consumption reduces what is available to me) and excludable (you can prevent me from consuming without paying). A loaf of bread illustrates: if you eat it, I cannot, and the baker can refuse to sell to me if I do not pay. Standard markets work well for private goods because prices coordinate decisions: prices signal scarcity, allocate units to those who value them most, and incentivize production. The competitive market for bread does not require government intervention beyond enforcement of property rights and contracts.

Public goods are non-rivalrous and non-excludable. National defense protects everyone in a country whether or not they contributed to the military budget. Private markets fail because no individual is willing to pay her share when she can free-ride on others. The result is severe underprovision: a country relying on voluntary contributions to fund its military would have no military. The remedy is government provision financed by taxation, which solves the free-rider problem by force. The U.S. spends $850 billion per year on defense not because we have markets for defense services but because we have a government that levies taxes to provide it collectively.

Club goods are non-rivalrous but excludable. A movie streaming service can serve one more subscriber at near-zero marginal cost (non-rivalrous), but can refuse service to non-payers (excludable). Private markets can work here because the excludability allows firms to charge for access. The pricing problem is non-trivial (because marginal cost is near zero, charging marginal cost would not cover fixed costs), so club goods are typically provided by firms with some pricing power that allows them to recover their fixed investments. Cable TV, gym memberships, online services, and toll roads are all examples. The challenge with club goods is making sure the pricing structure does not artificially limit access to a non-rivalrous good.

Common-pool resources are rivalrous but non-excludable. An ocean fishery is the canonical case: each ton of fish caught is a ton no one else can catch (rivalrous), but it is impossible to prevent fishermen from going to sea (non-excludable). The result is overexploitation. Each fisherman's individual incentive is to maximize her own catch; the cumulative effect of all fishermen acting on this incentive is collapse of the fish stock, which makes everyone worse off in the long run. This is Garrett Hardin's 'tragedy of the commons.'

The tragedy of the commons in fisheries:

Global fish stocks have been overexploited for decades. The FAO estimates that approximately 35% of global fish stocks are fished at biologically unsustainable levels, with the figure rising over time. The North Atlantic cod fishery, which sustained European populations for 500 years, collapsed in 1992 and has not recovered despite a moratorium. The bluefin tuna is endangered. The orange roughy, once abundant in deep South Pacific waters, was fished out within decades of becoming commercially valuable.

The mechanism is straightforward. Each fishing fleet, taking the behavior of other fleets as given, calculates that catching one more ton of fish today produces revenue today. The cost (one less ton of fish available in the future) is shared across all fleets; the fleet that does the catching does not bear the full cost. So every fleet has the incentive to catch as much as possible. The aggregate result is stock collapse, even though every fleet would prefer the long-run outcome where stocks are maintained at sustainable levels.

Mechanisms used to address fisheries collapse:

First, regulation through total allowable catches (TAC). Government agencies estimate sustainable yield and limit total catch to that level. The problem is that monitoring is difficult (ships at sea, transshipment to other vessels) and that the regulator must distribute the TAC among competing fleets, which is politically fraught. National quota systems work better than international waters.

Second, individual transferable quotas (ITQs). Each fisherman is given a tradable right to catch a specific share of the TAC. ITQs convert the common-pool problem into a property-rights problem: the quota holder has an interest in long-term stock health because her quota's value depends on it. Iceland, New Zealand, and Australia have used ITQ systems with substantial success: fish stocks have recovered and fleet incomes have stabilized. ITQs have also produced consolidation of fishing rights into fewer hands, which has been politically controversial.

Third, marine protected areas. Designated zones where fishing is prohibited; serve as breeding grounds and recovery sites. Increasingly common, with some evidence of success in producing 'spillover' that benefits adjacent fisheries.

Fourth, international agreements. The Convention for the Conservation of Atlantic Tunas, the various Regional Fisheries Management Organizations. These have had mixed success; some species have stabilized, others continue to decline because the agreements lack enforcement.

Ostrom's contribution:

Elinor Ostrom challenged the assumption that common-pool resources required either privatization or state control to manage. Through extensive field research, she documented dozens of cases where local communities successfully managed common-pool resources for centuries through informal institutions: lobster fisheries in Maine, irrigation systems in Spain and the Philippines, alpine pastures in Switzerland, groundwater in California basins.

The conditions Ostrom identified for successful community self-governance: (1) Clear boundaries defining who has rights to the resource. (2) Rules adapted to local conditions, designed by the users themselves. (3) Most users participate in modifying the rules. (4) Effective monitoring of behavior. (5) Graduated sanctions for violations. (6) Low-cost dispute resolution mechanisms. (7) External recognition of community rights. (8) Nested governance for larger systems.

When these conditions are met, communities can sustain cooperation indefinitely without state intervention. The Lofoten cod fishery in Norway has been managed by local fishermen cooperatively since medieval times. Spanish huertas (irrigation communities) date to the Moorish period and continue to operate today with rules largely unchanged.

When do Ostrom's solutions fail? Several conditions undermine community self-governance:

First, scale. Local communities can monitor and sanction each other; global commons cannot be managed this way. Carbon emissions are a global commons; no community can effectively police them.

Second, technology that increases exploitation capacity faster than institutions can adapt. Industrial fishing vessels can deplete stocks faster than any local institution can respond. Local cod fishermen in Maine adapted slowly over centuries; the industrial trawler fleet in the same waters depleted in decades.

Third, in-migration of new users who do not share the community's norms. The tragedy of the commons reasserts itself when the community boundary breaks down.

Fourth, external markets that change the value of the resource. When a previously local resource becomes globally valuable (the orange roughy, traditionally unfished, became valuable when foreign fleets discovered it), local norms collapse.

My assessment: Ostrom's research is important corrective to the assumption that common-pool resources can only be managed by privatization or state ownership. Many resources at appropriate scale, with stable communities, with manageable technology, are successfully self-governed. The state's job is often to recognize and support these arrangements rather than to displace them with formal property rights or top-down regulation.

But Ostrom's solutions do not scale to global commons or to resources subject to industrial exploitation. For these (climate, ocean fisheries, atmospheric pollution), the solution must be at the level of the affected community, which is often global or national. This requires the harder work of building formal institutions, international agreements, and enforcement mechanisms. The lesson from Ostrom is that informal institutions can work where the conditions allow; the lesson from the global commons is that those conditions are increasingly rare. The challenge of our century is building the formal institutions needed where the informal ones cannot reach.`,
  },
  {
    id: "d6",
    number: 11,
    title: "Discussion 6: Asymmetric Information and Market Failure",
    points: 50,
    type: "discussion",
    objectives: [
      "Apply the Akerlof 'lemons' model to real markets and identify the institutions that have evolved to mitigate adverse selection.",
      "Analyze how adverse selection and moral hazard shape the U.S. health insurance system, and the trade-offs of major reform options.",
    ],
    reading: `Standard economic models assume perfect information: all participants know the relevant features of the goods and services being traded. Real markets often violate this assumption, sometimes severely. When one party to a transaction has more information than the other, asymmetric information can produce market failure.

Two main forms:

Adverse selection: occurs before a transaction. The informed party knows something about the quality of what is being traded that the uninformed party does not. The classic case is Akerlof's 'market for lemons' (1970):

Used cars vary in quality. Sellers know whether their car is a 'peach' (high quality) or a 'lemon' (low quality); buyers cannot tell. If buyers are willing to pay the average value of cars on the market, they will overpay for lemons and underpay for peaches. Owners of peaches refuse to sell at the average price; they withdraw from the market. The average quality of cars offered for sale falls, so buyers lower the price they are willing to pay, which drives more peaches out of the market. In the limit, only lemons are offered. The market can collapse entirely even when many mutually beneficial trades would have been possible with full information.

Moral hazard: occurs after a transaction. One party can take hidden actions that affect the other party's payoff. The classic case is insurance: once a person has fire insurance, she may take fewer precautions against fire, because the insurance company bears the cost. The insurance contract changes her behavior in a way the insurance company cannot fully observe.

Other examples:
- Employer-employee: workers may shirk if they cannot be monitored.
- Borrower-lender: a borrower may take excessive risk if losses fall on the lender.
- Principal-agent generally: any case where one party (the principal) hires another (the agent) to act on her behalf but cannot fully monitor the agent's actions.

Mechanisms that address information asymmetry:
- Signaling: the informed party takes a costly action that credibly conveys quality. A college degree signals ability; a warranty signals product quality.
- Screening: the uninformed party offers contracts designed to reveal information. Insurance companies offer deductibles to attract careful policyholders.
- Reputation: in repeated interactions, reputation substitutes for direct verification.
- Regulation: licensing, certification, mandatory disclosure.
- Intermediaries: middlemen who specialize in verifying quality.`,
    assignment: `Assignment (50 points):
1. Apply the lemons model to each of the following markets and discuss whether and how the market deals with the information asymmetry:
   a. The used car market
   b. Individual health insurance
   c. Online dating profiles
   d. Restaurants
2. Take one of these markets in depth. What real-world institutions have evolved to address the information asymmetry? How effective have they been? Are there cases where the market still fails to function well because of the underlying information problem?`,
    modelResponse: `Model Response

Lemons problem in four markets:

a. Used cars. The original Akerlof case. Sellers know their car's history; buyers cannot easily verify it. Several institutions have evolved to address this. CarFax and similar vehicle history reports provide records of accidents, maintenance, mileage rollbacks, and ownership transfers. Independent mechanic inspections (typically $100-200) allow buyers to evaluate condition before purchase. Dealer warranties (offered on certified pre-owned vehicles) shift risk back to sellers. Brand reputation affects perceived quality: a used Toyota is less of a lemon risk than a used domestic make with reputation for unreliability. The used car market has not collapsed; it functions reasonably well, but the friction is real and the market does not work as efficiently as one with full information would.

b. Individual health insurance. Severe adverse selection problem. People who buy individual health insurance know more about their own health risks than the insurer does. People expecting high medical costs are eager to buy; people expecting low costs are reluctant. The insurer must price for the actually-enrolled population, which is sicker than the general population. Higher prices drive away healthier potential buyers, leaving an even sicker pool, requiring even higher prices. This 'adverse selection death spiral' was the historical pattern in U.S. individual markets before the ACA. The ACA addressed it through (1) mandatory community rating (no medical underwriting), (2) the individual mandate (forcing healthier people to participate), and (3) subsidies that reduce after-subsidy prices for many enrollees. The mandate was effectively removed in 2017; the market has been somewhat unstable since, though subsidies have prevented collapse. Pre-existing-condition protections create the adverse selection problem; they are politically popular but require complementary mechanisms to make the market work.

c. Online dating profiles. Severe and well-known asymmetric information problem. People misrepresent their age, weight, height, income, occupation, marital status, and intentions. The medium itself amplifies the problem: text and photos can be selected and edited; in-person interaction reveals far more. The market has adapted with several mechanisms: video calls before first meetings (revealing more than profiles), reverse image search of photos (detecting stock images and catfishing), reviews and recommendations from prior dates (in some apps), verification systems (linking profiles to phone numbers or social media accounts). None fully solves the problem. The persistent gap between profile and reality is well-documented: a 2010 OkCupid analysis found people lie about height by 2 inches and income by 20% on average. The market functions because users discount profile claims and rely on in-person verification, but the information asymmetry significantly raises search costs.

d. Restaurants. Information asymmetry about food quality, kitchen hygiene, and service. The market has evolved many institutions: brand chains (where consistent quality lets customers pre-commit), reviews (Yelp, Google), professional critics (Michelin, newspaper restaurant critics), health-department inspections (publicly posted in many jurisdictions), reputation by word-of-mouth, and visible features like cleanliness of the dining area as proxies for kitchen hygiene. The restaurant market generally works well: the lemons problem is mitigated. Restaurants that serve bad food go out of business reasonably quickly; reviews aggregate experience across many customers. The market still fails in some niches: travel and tourist destinations (where most customers are one-time visitors who cannot build reputation in the local network) tend to have worse food than residential neighborhoods.

In-depth: health insurance and the U.S. story.

Health insurance is the case where information asymmetry has done the most damage to market function. The problem operates in both directions. Adverse selection (insurers cannot tell the sick from the healthy at purchase, leading to selection of sicker risks) and moral hazard (insured patients consume more healthcare than uninsured ones, because they do not pay the full marginal cost) both apply.

The U.S. has tried multiple mechanisms over the past century.

Employer-based insurance, the dominant form, emerged accidentally during WWII wage controls, when fringe benefits were exempt from caps. The structure addresses adverse selection by aggregating large pools that include healthy and sick workers, with no individual choice about purchase. It does not address moral hazard well: patients have limited price exposure for routine care.

Medicare, established in 1965 for the elderly, addresses adverse selection by making coverage universal for the over-65 population. The elderly are higher-cost on average than the working population, but everyone in the pool faces similar risk profiles. Moral hazard is partially addressed by cost-sharing on some services.

Medicaid, also 1965, covers low-income populations and the disabled. Adverse selection is irrelevant because eligibility is determined by income/disability, not by enrollment choice. Moral hazard is small because the population covered has limited ability to consume excess healthcare.

The individual market (for people without employer coverage and not eligible for Medicare/Medicaid) is where the adverse selection problem has been most severe historically. Pre-2014, insurers used medical underwriting (charging different prices based on health status, excluding pre-existing conditions, declining to insure high-risk applicants) to address adverse selection. This worked for the insurance market in a narrow sense but left many people uninsurable. The ACA reversed this with community rating (everyone in a region pays similar prices regardless of health) plus the individual mandate. Mandate removal in 2017 left the system partially functional: the market exists because of subsidies, but it is vulnerable to adverse selection in ways that require ongoing subsidy support.

Effectiveness:

The U.S. healthcare system has the world's highest spending (17% of GDP) and middling outcomes by international comparison. Some of this is healthcare-specific (defensive medicine, administrative complexity), but information problems play a meaningful role. Patients cannot easily compare prices across providers; quality information is fragmented; the agent-principal problem (doctor as agent for patient and insurer simultaneously) creates conflicts of interest. International systems handle these problems differently: some (UK NHS) by eliminating market provision entirely; others (Germany, Netherlands) by tightly regulated insurance markets with mandatory participation and standardized benefits.

The U.S. case illustrates a key point about information asymmetry: when the underlying information problem is severe enough, market mechanisms alone may not be sufficient. Combining markets with regulation (community rating, mandates, mandatory disclosure of prices) can sustain market function. Eliminating markets (single-payer) is another solution, with its own trade-offs. The pure-market solution does not work in health insurance, has never worked anywhere, and is not likely to work in the future. The information asymmetry is too severe and the consequences of market failure are too high. Some combination of market mechanisms with regulatory or public intervention is required wherever insurance is provided.

The general lesson: information asymmetry is a fundamental source of market failure, and the institutions that address it (reputation systems, intermediaries, regulation, signaling and screening mechanisms) are responsible for a great deal of how real markets actually function. The standard supply-and-demand model in textbooks assumes information problems away. The more interesting and more useful economics begins when we put them back in.`,
  },
  {
    id: "d7",
    number: 12,
    title: "Discussion 7: International Trade at the Microeconomic Level",
    points: 50,
    type: "discussion",
    objectives: [
      "Use the Stolper-Samuelson framework to predict the within-country distributional effects of opening trade.",
      "Explain why concentrated trade losses produce political backlash exceeding the dollar value of those losses, and evaluate alternative policy responses.",
    ],
    reading: `While macroeconomics studies trade balances and exchange rates, microeconomics examines trade at the level of individual firms, workers, and consumers. The fundamental insight, from Ricardo onward, is that trade based on comparative advantage produces mutual gains, but those gains are unevenly distributed within each country.

Sources of comparative advantage:
- Differences in factor endowments (Heckscher-Ohlin model). Countries abundant in capital export capital-intensive goods; countries abundant in labor export labor-intensive goods.
- Differences in technology (Ricardian model). Countries with better technology in certain industries export those goods.
- Increasing returns and product differentiation. Two similar countries trade with each other because consumers want variety and firms gain from scale.

Distributional effects within countries:
- The Stolper-Samuelson theorem: trade raises the real return to the factor used intensively in a country's export industries and lowers the return to the factor used intensively in its import industries.
- In a labor-abundant country, trade raises wages and lowers returns to capital.
- In a capital-abundant country (like the U.S.), trade raises returns to capital and lowers wages of less-skilled workers in import-competing industries.

The empirical China shock (Autor, Dorn, Hanson 2013 and subsequent work):
- U.S. counties more exposed to import competition from China experienced significant declines in manufacturing employment.
- These effects persisted for decades; affected communities did not adjust as classical models predicted.
- Workers did not easily move to other industries or other locations.
- Health, marriage, mortality, and political outcomes in affected communities worsened.
- Aggregate gains from trade were real but concentrated; losses were concentrated in specific places and persons.

Policy responses:
- Trade adjustment assistance (TAA): retraining and support for workers displaced by trade. Largely judged ineffective in U.S. practice.
- Tariffs: protect specific industries at the cost of consumers and downstream users.
- Industrial policy: subsidize domestic production in strategically important sectors.
- Place-based policy: investments in affected communities rather than retraining individuals.`,
    assignment: `Assignment (50 points):
1. Suppose the U.S. opens trade with a country that has lower wages for textile workers. Use the Stolper-Samuelson framework to predict the effects on: U.S. textile workers, U.S. textile firm owners, U.S. workers in non-tradable industries (e.g., haircuts), and U.S. consumers of textiles. Who wins and who loses?
2. The aggregate gains from U.S.-China trade have been estimated at roughly $400 billion annually. The labor market losses for affected workers have been substantial but the dollar figure is much smaller. Why has the political backlash against trade been so much larger than the dollar figures might suggest? What policy responses would have addressed the political problem more effectively than what was actually done?`,
    modelResponse: `Model Response

Effects of opening U.S. textile trade:

U.S. textile workers: lose. Their wages reflect their productivity relative to international alternatives. When competition from low-wage textile workers becomes possible, U.S. textile firms must either match the lower prices (which requires lower wages) or exit the industry. Many U.S. textile firms have done both: wages in remaining domestic textile production fell sharply, and most domestic production has been shifted abroad or eliminated. The textile workforce in North and South Carolina (historic centers) declined by over 80% from 1990 to 2020.

U.S. textile firm owners: complicated. If they are tied to U.S.-based production, they lose (cannot compete on cost). If they own the brand and outsource production, they may gain (cheaper inputs, larger markets, expanded distribution). U.S. apparel companies (Gap, Nike, Levi's) largely shifted to design and brand management, sourcing production from low-cost countries. Their owners and shareholders did very well; their U.S. manufacturing employees did not.

U.S. workers in non-tradable industries: net gain on average, through the consumer channel. Their wages do not directly fall to global competition because their services (haircuts, landscaping, healthcare) cannot be imported. They benefit from cheaper textiles as consumers. The non-tradable share of U.S. employment has expanded as a result of trade, particularly in healthcare, education, and personal services.

U.S. consumers: large net gains. The price of apparel in the U.S. has been remarkably stable in nominal terms since the 1990s, despite general inflation. Real apparel prices have fallen by roughly 50% relative to overall inflation since the 1990s, which is overwhelmingly due to import substitution. Consumers across the income distribution have benefited, though lower-income consumers benefit disproportionately because clothing is a larger share of their budget.

U.S. capital owners (broadly): gains. Higher returns on capital reflect the capital intensity of U.S. exports relative to the labor intensity of imports. The U.S. exports capital-intensive goods (aircraft, pharmaceuticals, software, financial services) and imports labor-intensive goods. Trade thus raises returns to the abundant factor (capital, including human capital) and lowers returns to the scarce factor (less-skilled labor).

Net effect: positive in aggregate, distributionally regressive at the level of less-skilled U.S. workers, and geographically concentrated in communities that specialized in trade-exposed manufacturing.

Why has the political backlash been so much larger than dollar values suggest?

Several reasons, all important.

First, the gains are diffuse and the losses are concentrated. A U.S. consumer saves perhaps $200 per year on cheaper clothing. She does not perceive this as 'trade benefit'; she perceives it as the price of clothing. A textile worker who loses her $40,000/year job perceives the loss as enormous, immediate, and traceable to a specific cause. Concentrated losses are politically active in a way that diffuse gains are not.

Second, the losses fall on communities, not just individuals. A factory closure in a small town affects the workers directly, but also the local schools (lost tax base), the local businesses (lost customers), the housing market (declining demand), the local healthcare system (job-linked insurance disappears), and the social fabric (community institutions weaken). Autor and colleagues document that trade-shock counties experienced not just employment loss but rising marriage breakdown, declining male labor force participation, increased mortality (particularly 'deaths of despair'), and significant political realignment.

Third, the losses persisted. Classical trade theory predicts that displaced workers will move to expanding sectors and other regions. In practice, this did not happen at the scale predicted. Workers in affected communities largely stayed where they were. The communities did not bounce back. By 2016, twenty years after NAFTA and fifteen years after China's WTO accession, the affected communities were still depressed. The persistence of the losses turned what theory predicted as a transitional adjustment into a permanent feature of those places.

Fourth, the dollar comparison understates the social comparison. A $400 billion aggregate gain divided by 330 million people is roughly $1,200 per person. A 50% drop in a community's economic base affects every aspect of life in that community. Even if the average American is better off by $1,200, the 100,000 people in a specific community where the factory closed are much worse off, and their political voice is loud.

Fifth, the political system gives concentrated losers disproportionate voice. Senate representation, Electoral College math, and the geographic distribution of affected communities meant that trade losses concentrated in the upper Midwest and Appalachia translated into outsized political consequences. The 2016 election outcome turned partly on a small set of counties in Pennsylvania, Michigan, and Wisconsin where trade shock had been severe. Politically, those communities mattered far more than their share of population.

What policy responses would have worked better?

The U.S. response was trade adjustment assistance (TAA), which provided retraining and modest income support for workers certified as trade-displaced. TAA has been studied extensively and judged largely ineffective. The retraining programs did not lead to substantially higher earnings; the income support was limited and short-term; the broader community effects were not addressed at all.

Better alternatives existed in theory.

First, place-based investment. Rather than treating workers as portable units to be retrained for jobs in other locations, governments could have invested in the affected places: infrastructure, broadband, education, healthcare, and direct subsidies for new businesses. The European Union spent heavily on this for similarly affected regions (the European Regional Development Fund, the European Social Fund), with mixed but real success. The U.S. did not make analogous investments at scale.

Second, larger and more durable income support. Modest, time-limited income support is not adequate when entire communities are economically devastated. A more generous response would have provided extended unemployment insurance, expanded earned income tax credit, healthcare coverage independent of employment, and wage insurance for workers taking lower-paid jobs.

Third, sectoral policy that maintained domestic capacity. Other countries, particularly Germany, have maintained substantial manufacturing employment through targeted support (apprenticeship systems, applied research institutes, capital subsidies for export-oriented manufacturers). U.S. industrial policy has been ad-hoc and often ineffective, but the alternative of essentially no industrial policy ceded sectors that other countries protected.

Fourth, slower opening. The shock was abrupt: WTO accession in 2001 produced a sudden wave of imports that overwhelmed domestic adjustment capacity. A more gradual opening, with safeguards triggered by surge thresholds, would have allowed more adjustment time.

Could these have prevented the political backlash? Perhaps not entirely, but at lower magnitude. The political problem was not just economic loss but the perception that policymakers were indifferent to those losses and operating on the assumption that markets would smoothly handle adjustment. Demonstrable, substantial, durable support for affected communities would have changed the political narrative. The U.S. chose, for both ideological and budgetary reasons, not to make that investment. The result was a coalition of trade-skeptical voters that has reshaped politics in both parties.

The economic moral: aggregate gains from trade are real, but distributional effects are political and require political solutions. Treating trade losses as transitional frictions that markets will resolve is empirically wrong and politically catastrophic. The case for trade requires not just a demonstration of aggregate gains but a credible mechanism for ensuring that those gains are sufficiently widely shared. The U.S. failed to provide that mechanism, and the trade consensus has unraveled accordingly.`,
  },
  {
    id: "tp",
    number: 13,
    title: "Term Paper (Outline + Final)",
    points: 200,
    type: "termpaper",
    objectives: [
      "Construct a structured term-paper outline with a clear thesis, section plan, sources, and counter-arguments.",
      "Defend an original thesis on a major microeconomic market, policy, or institutional question in a complete, well-cited term paper.",
    ],
    reading: ``,
    assignment: `PART 1 — TERM PAPER OUTLINE (100 points)

The term paper is the capstone assignment for this course. It will be a 2,500-3,500 word essay analyzing a major microeconomic question, market, or policy debate of your choice.

The outline is a structured plan for the term paper. It is not the paper itself, but a roadmap that demonstrates you have selected a topic, formulated a thesis, identified your major arguments, and surveyed the relevant literature.

Sample topics:
- The economics of higher education: is the wage premium a return to skills or a credential effect?
- The minimum wage debate: what does the modern empirical literature actually show?
- The economics of healthcare pricing: why does the U.S. pay so much more than other countries?
- Antitrust policy in tech: should the U.S. break up Google, Amazon, or Meta?
- The gig economy: are Uber and DoorDash workers employees or contractors, and what does the economic analysis suggest?
- Housing markets and zoning: why have U.S. coastal cities become so unaffordable?
- Carbon pricing: comparing the carbon tax and cap-and-trade approaches in real-world implementations.
- Pharmaceutical pricing: does the U.S. system effectively trade off short-run access for long-run innovation?
- Behavioral economics and retirement saving: what does the evidence on automatic enrollment, default settings, and nudges actually show?

Or propose your own topic, subject to instructor approval.

Submit an outline containing the following sections:

1. Title and thesis statement (one paragraph). State clearly what the paper will argue.
2. Significance (one paragraph). Why does this question matter? Why now?
3. Section-by-section structure (typically 4-6 sections). For each section, state in 2-3 sentences what it will cover and how it advances the argument.
4. Key sources (annotated bibliography of 8-12 sources). Include both academic literature and primary-source data. For each source, write 1-2 sentences on what you will use it for.
5. Anticipated counter-arguments (one paragraph). What are the strongest objections to your thesis, and how will you address them?

---

PART 2 — TERM PAPER (100 points)

Write a 2,500-3,500 word term paper on the topic for which you submitted an approved outline.

Requirements:
- Clear thesis stated in the introduction.
- Organized argument with section headings.
- Engagement with the relevant academic literature (cite at least 8 sources).
- Use of primary data where appropriate.
- Acknowledgment of and response to the strongest counter-arguments.
- Clear conclusion that does more than restate the introduction.

Formatting:
- Double-spaced, 12-point font, 1-inch margins.
- Citations in any consistent style (Chicago, APA, MLA).
- Bibliography at the end.

Write the term paper that fully realizes the outline you submitted. Use the section structure, the sources, and the thesis from your approved outline. Engage seriously with the counter-arguments you identified. The paper should be the developed version of the plan, not a new document.`,
    modelResponse: `Model Response

PART 1 — MODEL OUTLINE

Title: 'The U.S. Housing Affordability Crisis Is a Zoning Crisis: Land Use Restriction as the Dominant Driver of Coastal Unaffordability'

Thesis statement: The housing affordability crisis in U.S. coastal metros is not primarily caused by income inequality, foreign capital, financialization, or other macro-scale forces, but by local zoning and land-use regulations that restrict the construction of new housing. The empirical evidence from natural experiments, cross-metro variation, and policy reform episodes (Auckland, Minneapolis, parts of California) consistently shows that supply restrictions, not demand factors, explain the bulk of the cross-metro variation in housing costs. Effective policy must reduce the regulatory cost of building new housing units; redistributive policies and rent controls treat symptoms rather than causes.

Significance: U.S. housing costs in major coastal metros have risen 200-300% since 2000 in real terms while housing costs in less-restricted metros (Houston, Dallas, Atlanta) have risen far less. The result is a massive transfer of wealth from renters and young people to existing homeowners, a decline in geographic mobility (Americans no longer move from low-wage to high-wage regions because they cannot afford housing there), and substantial drag on national productivity (the Hsieh-Moretti estimates suggest 36% of total U.S. growth has been lost due to misallocation of labor away from high-productivity cities). The crisis has produced political instability, a growing constituency for radical responses (rent control, public housing at scale, breakup of large landlords), and a generation of younger Americans who view homeownership and family formation as economically out of reach.

Section-by-section structure:

Section 1: The Data on Housing Costs. Documents the cross-metro variation in housing costs from 2000-2024. Establishes that affordability has deteriorated most severely in metros with the most restrictive zoning (San Francisco, New York, Boston, Los Angeles, Seattle) while metros with permissive zoning (Houston, Dallas, Atlanta, Nashville) have absorbed similar population growth without comparable affordability deterioration.

Section 2: The Economic Theory. Reviews the supply-and-demand framework as applied to housing. Distinguishes structures (which can be built) from land (which cannot, but which becomes more valuable as demand rises). Explains why housing supply is necessarily local and why local restrictions on building (zoning, permitting, environmental review, parking requirements, set-back requirements, height limits) translate into rising prices when demand grows.

Section 3: The Empirical Evidence. Reviews key studies: Glaeser and Gyourko on land regulation as a share of housing cost; Hsieh and Moretti on the productivity cost of misallocation; Saiz on the elasticity of housing supply across metros; the natural experiments from upzoning in Auckland (Greenaway-McGrevy and Phillips 2023), Minneapolis (2020 onwards), and Houston (which has no zoning at all). Each study provides convergent evidence that supply restrictions are decisive.

Section 4: Alternative Explanations and Why They Fail. Considers and rejects the major alternative explanations. Foreign capital: too small to explain the magnitude. Income inequality: rising in all metros, not just unaffordable ones. Financialization: real but late-cycle, not the underlying driver. Population growth: similar across affordable and unaffordable metros, so cannot be the cause. Each alternative explanation can account for a small fraction of the variance; zoning accounts for the bulk.

Section 5: Policy Reforms That Work. Discusses what has worked. Upzoning (eliminating single-family-only zoning, permitting accessory dwelling units, allowing duplexes/triplexes by-right). Permit streamlining (reducing review times and discretionary approval). By-right development for projects meeting objective standards. State-level preemption of local zoning vetoes (California SB 9, SB 10, ADU laws; New York's recent push; Massachusetts MBTA Communities Act). Documents the outcomes where reforms have been implemented: housing production has risen, rent growth has slowed, and political support has held.

Section 6: Why Reform Has Been Difficult. Analyzes the political economy of zoning. Existing homeowners are organized, present, and benefit from current rules; renters and would-be residents are dispersed, mobile, and lack political voice. The 'homevoter hypothesis' (Fischel) explains why local politics systematically favors restriction. State and federal preemption is the only viable response to this collective action problem. Recent reforms have largely come from state legislatures rather than local councils.

Section 7: Conclusion. The U.S. coastal housing crisis is solvable. The required reforms are well-understood and have been demonstrated to work where implemented. The obstacle is political, not economic. The cost of inaction is rising annually; the longer reform is delayed, the more wealth is concentrated in incumbent homeowners, the more young people are priced out of opportunity, and the more political coalitions form around redistributive responses that are less effective than supply-side reforms.

Key sources (annotated):

1. Glaeser, Edward L. and Joseph Gyourko. 'The Economic Implications of Housing Supply.' Journal of Economic Perspectives 32 (1): 3-30 (2018). -- The canonical analysis of how regulatory costs translate into housing prices. Provides the foundational empirical estimates.
2. Hsieh, Chang-Tai and Enrico Moretti. 'Housing Constraints and Spatial Misallocation.' American Economic Journal: Macroeconomics 11 (2): 1-39 (2019). -- The estimate that housing supply constraints cost the U.S. roughly 36% of GDP through misallocation of labor.
3. Saiz, Albert. 'The Geographic Determinants of Housing Supply.' Quarterly Journal of Economics 125 (3): 1253-1296 (2010). -- The supply-elasticity measure used in virtually all subsequent empirical work; distinguishes physical from regulatory constraints.
4. Fischel, William A. 'The Homevoter Hypothesis.' Harvard University Press (2001). -- The political economy framework: explains why local zoning is so resistant to reform.
5. Greenaway-McGrevy, Ryan and Peter C. B. Phillips. 'The Impact of Upzoning on Housing Construction in Auckland.' Journal of Urban Economics 136 (2023). -- The clearest natural experiment in upzoning: shows that permitting denser construction in Auckland produced large supply response and slower rent growth.
6. Mast, Evan. 'JUE Insight: The effect of new market-rate housing construction on the low-income housing market.' Journal of Urban Economics 133 (2023). -- Demonstrates 'filtering' effects: new high-end housing reduces rents at lower price points within five years.
7. Furman, Jason. 'Barriers to Shared Growth: The Case of Land Use Regulation and Economic Rents.' Council of Economic Advisers report (2015). -- Authoritative summary of the empirical evidence for a policy audience.
8. Mast, Evan and Brian Asquith. 'Local Effects of Large New Apartment Buildings in Low-Income Areas.' Review of Economics and Statistics (2021). -- Counters the gentrification objection: new market-rate building in low-income neighborhoods reduces rents in surrounding buildings.
9. Diamond, Rebecca, Tim McQuade, and Franklin Qian. 'The Effects of Rent Control Expansion on Tenants, Landlords, and Inequality: Evidence from San Francisco.' American Economic Review 109 (9): 3365-3394 (2019). -- The rent-control natural experiment showing that rent control reduces housing supply by 15% over decades. Essential for the section on why redistributive policies cannot substitute for supply expansion.
10. U.S. Census Bureau, American Community Survey, 2000-2023. -- Primary data on housing costs, rents, vacancy rates, and housing supply by metro.
11. Wharton Residential Land Use Regulatory Index (Gyourko, Saiz, Summers). -- Quantitative measure of zoning restrictiveness by metro; used to test cross-metro relationships between regulation and cost.
12. California State Senate, SB 9 and SB 10 implementation reports. -- Recent state-level reform evidence; provides the U.S. analog to the Auckland natural experiment.

Anticipated counter-arguments:

The strongest objection is that new market-rate housing construction does not address affordability for low-income residents and that supply-side reforms primarily benefit developers and higher-income buyers. The literature actually addresses this directly: Mast (2023) and Asquith and Mast (2021) show that new market-rate construction reduces rents in surrounding buildings, including lower-rent ones, through filtering. New construction at the top of the market frees up units lower in the market as their previous occupants upgrade. This is empirically demonstrated, and I will engage it directly. A second objection is that demand-side factors (income inequality, capital flows, financialization) are real and important. I will accept that they are real but show that the magnitude is too small to explain the observed variation across metros; the supply explanation is decisive because it varies enormously across metros while the demand factors are common to all of them. A third objection is that zoning serves legitimate purposes (preserving neighborhood character, environmental protection, school quality). I will accept that some zoning is appropriate and argue for upzoning where current rules are dramatically more restrictive than any defensible purpose requires.

---

PART 2 — MODEL TERM PAPER

The U.S. Housing Affordability Crisis Is a Zoning Crisis: Land Use Restriction as the Dominant Driver of Coastal Unaffordability

Introduction

In 2024, the median home price in San Francisco was approximately $1.3 million. The median home price in Houston was approximately $340,000. Both cities have experienced substantial population growth over the past two decades. Both are major economic centers. Both have substantial demand for housing. The difference in price is enormous, and it is not explained by income differences, foreign capital, demographic shifts, or any of the popular explanations for the housing crisis. The difference is explained almost entirely by what each city allows to be built.

This paper argues that the U.S. housing affordability crisis is, at its root, a zoning crisis. Local land-use restrictions in coastal metros have prevented the supply of housing from rising to meet demand, and the resulting shortage has produced sustained price escalation. The empirical evidence from cross-metro comparison, natural experiments, and successful reform episodes points consistently in this direction. Alternative explanations (income inequality, foreign capital, financialization, demographic change) explain some variation but cannot account for the bulk of what differs across metros with similar fundamentals but different regulatory environments. Effective policy must address the supply restriction directly; redistributive responses and rent controls treat symptoms while leaving the underlying scarcity intact.

The stakes are enormous. Hsieh and Moretti (2019) estimate that housing supply constraints have cost the United States roughly 36% of its GDP growth from 1964 to 2009 by preventing workers from relocating to higher-productivity cities. The loss of geographic mobility, the concentration of housing wealth among existing owners, the political polarization that follows from generational inequality in housing access, and the productivity drag on the U.S. economy all flow from the same source. A crisis of this magnitude deserves analysis that gets the cause right.

I. The Data on Housing Costs

U.S. housing costs have diverged dramatically across metros since 2000. According to Zillow and the U.S. Census Bureau, real home prices in major coastal metros (San Francisco, New York, Boston, Los Angeles, Seattle, San Diego, Washington DC) rose between 100% and 250% from 2000 to 2024. In contrast, real home prices in major Sun Belt metros without restrictive zoning (Houston, Dallas, Atlanta, Phoenix, Charlotte, Nashville) rose by 20% to 80% over the same period. This divergence cannot be attributed to differential population growth: Houston and Dallas grew at rates comparable to or exceeding Los Angeles and San Francisco. It cannot be attributed to differential income growth: Atlanta and Nashville saw real income growth comparable to Boston. It cannot be attributed to climate or amenities: many of the affordable metros offer the same amenities (Atlanta, Phoenix) or better climate (Tampa, Orlando) as the unaffordable ones.

What does correlate strongly with the divergence is regulatory restrictiveness. The Wharton Residential Land Use Regulatory Index, developed by Gyourko, Saiz, and Summers, measures the restrictiveness of local zoning and permitting regimes. Metros that score in the most restrictive quintile (San Francisco, Boston, New York, San Jose) have experienced the largest real price increases. Metros in the least restrictive quintile (Houston, Indianapolis, Dallas) have seen the most modest price increases despite substantial population growth.

The cost burden has fallen disproportionately on younger Americans and on renters. The Joint Center for Housing Studies at Harvard documents that the homeownership rate for Americans aged 25-34 has fallen from 51% in 1980 to 38% in 2022. Median rent as a share of median income in coastal metros now exceeds 35%, the conventional threshold for 'rent-burdened' status, for half of households.

II. The Economic Theory

The supply-and-demand framework applies to housing as it does to any other good, with one important refinement: the housing market is actually two markets, one for structures and one for land. Structures can be produced; land is fixed in quantity. When demand rises in a particular location, the price of land rises mechanically, because land cannot be added. But if construction is permitted, structures can be added, which produces housing units at the new equilibrium without inflating per-unit prices indefinitely.

The U.S. coastal pattern is that land prices have risen enormously while construction has been restricted. The result is that the land component of housing cost has come to dominate the structure component. Glaeser and Gyourko (2018) estimate that in San Francisco, the regulatory premium (the gap between observed prices and what construction costs would justify on free land) is now over $700,000 per unit. This is not the cost of building; it is the cost of permission to build. In Houston, the equivalent regulatory premium is essentially zero.

The mechanism by which restrictions translate into prices is straightforward. When zoning prohibits multifamily construction on land where it would otherwise be profitable, the existing single-family housing on that land becomes scarce relative to demand. The price reflects the scarcity, not the cost of producing the structure. The structure may have cost $400,000 to build and replicate; the property sells for $2 million because no one is allowed to add more units to the supply.

Several other features compound the effect. Permitting delays in coastal metros routinely run 2-5 years; in Houston, they run 6 weeks. Environmental review requirements (CEQA in California) have been used to block projects on grounds unrelated to environmental quality. Parking minimums force developers to build expensive structured parking instead of additional housing units. Set-back requirements, height limits, and floor-area-ratio limits each independently reduce the units that can be built on a given parcel. The cumulative effect of dozens of overlapping restrictions is to make construction either impossible or so expensive that only luxury units pencil out.

III. The Empirical Evidence

Several lines of evidence converge on the conclusion that supply restrictions drive the affordability crisis.

Cross-metro analysis: Saiz (2010) constructed a measure of housing supply elasticity for each metro, separating the physical constraints (mountains, water) from the regulatory ones. Metros with high regulatory restrictiveness have systematically experienced larger price increases per unit of demand increase. The R-squared on cross-metro regressions of price growth on regulatory restrictiveness, controlling for income and population growth, is typically over 0.5.

Natural experiments in upzoning: Greenaway-McGrevy and Phillips (2023) analyzed Auckland, New Zealand's 2016 upzoning, which allowed substantially denser construction across most of the city. They found that housing construction rose by approximately 50% over the following five years, and that real rents in Auckland fell by 14% relative to comparable New Zealand cities that did not upzone. The natural experiment isolates the effect of supply expansion because demand factors were similar across the comparison cities.

Minneapolis 2020 reform: Minneapolis eliminated single-family-only zoning in 2020, allowing duplexes and triplexes by-right on all residential land. Although too recent for definitive analysis, early results suggest the city has seen permitting increases relative to comparable Midwestern cities, with a corresponding moderation in rent growth.

Houston as the comparison case: Houston has no zoning. It uses deed restrictions and a few specific use regulations, but does not prohibit multifamily construction in most areas. Houston has absorbed substantial population growth (35% from 2000 to 2024, comparable to the fastest-growing California metros) while keeping real home price growth modest. The Houston case is the negative control: it shows what happens when supply is not restricted, and the answer is that prices remain affordable even with substantial demand pressure.

Filtering effects: Mast (2023) demonstrated that new market-rate construction in U.S. cities reduces rents in nearby buildings, including lower-rent ones, within a few years. The mechanism is filtering: households that move into new buildings vacate older buildings, which become available to households moving up from yet older buildings, and so on down the price ladder. The effect is empirically robust and addresses the common objection that 'building luxury housing doesn't help low-income households.' It does, indirectly but measurably.

IV. Alternative Explanations and Why They Fail

Several alternative explanations have been offered for the affordability crisis. Each captures a real phenomenon but fails to explain the bulk of the observed variation.

Income inequality: Real, but rising in all metros. The Gini coefficient for U.S. household income has risen by similar amounts in Houston and San Francisco. If income inequality were driving housing costs, both metros would have experienced similar deterioration. They have not. Income inequality may amplify the effect of supply restriction at the high end, but it is not the underlying driver.

Foreign capital: Real, especially in specific submarkets like Vancouver and parts of Los Angeles. But the magnitude is too small to explain the broader crisis. Foreign-owned housing accounts for less than 5% of housing stock in most affected metros, and the timing of foreign purchases does not match the timing of affordability deterioration in most metros.

Financialization: Institutional investors (Blackstone, Invitation Homes) have entered the single-family rental market in volume since 2012. This is real, and may affect specific submarkets in the Sun Belt where institutional investors concentrate (Atlanta, Phoenix). But coastal metros' affordability problems predate institutional investor entry, and institutional investors are largely absent from the most-affected coastal metros (where the math does not work for them).

Population growth: As noted, similar across affordable and unaffordable metros. Houston grew faster than Boston over the 2000-2024 period; Boston is dramatically less affordable.

Demographic shifts: Aging households, smaller household sizes, and millennial demand for urban living have all been cited. Each is real, but each affects all metros similarly. They cannot explain why some metros respond to demographic pressure with rising prices while others respond with rising construction.

Construction cost increases: Have risen, but only modestly in real terms (perhaps 30% from 2000 to 2024). Cannot account for the 100%+ price increases observed in coastal metros.

The pattern is consistent: each alternative explanation can account for some fraction of the variance, but none can account for the order of magnitude difference between Houston and San Francisco. The difference comes from how the metros respond to common pressures. Houston builds; San Francisco does not.

V. Policy Reforms That Work

The reforms that work share a common feature: they reduce the regulatory cost of constructing additional housing units.

Eliminating single-family-only zoning: A growing list of cities and states has done this or is moving in this direction. Minneapolis (2020), Oregon (2019), California (SB 9, 2021), Washington State (2023). The reform allows duplex, triplex, or fourplex construction on lots previously restricted to single-family use. The supply response has been substantial in early-adopter jurisdictions.

Permitting accessory dwelling units (ADUs): California's ADU laws, passed between 2016 and 2022, made it dramatically easier to build secondary units on existing single-family lots. The result has been a substantial increase in housing production, particularly in higher-cost markets. ADU permits in Los Angeles rose from a few hundred per year before reform to over 7,000 per year by 2023.

By-right development: Reducing discretionary approval allows projects meeting objective standards to proceed without prolonged review. Massachusetts's 40B program has done this for affordable housing for decades.

State preemption of local zoning vetoes: Recognizing that local control consistently produces restriction, several states have moved to override local zoning where it conflicts with state housing goals. Massachusetts's MBTA Communities Act, California's housing element law (with new enforcement under SB 35), and similar efforts in New York and Washington represent this approach.

Streamlining environmental review: Reforms to CEQA in California have begun to limit its use as an obstructionist tool. The 2022 reform allowing CEQA exemption for affordable housing in transit areas is one example.

Reducing parking requirements: Removing or reducing parking minimums lets developers build more housing instead of parking. Buffalo eliminated parking minimums in 2017; the experience has been positive enough that other cities have followed.

Where reforms have been adopted and implemented, the supply response is real and measurable. The Auckland case is the cleanest demonstration. Minneapolis and California are accumulating evidence. The reforms do not require new spending or new bureaucracy; they require dismantling existing restriction.

VI. Why Reform Has Been Difficult

The political economy of zoning is the central obstacle. Fischel's 'homevoter hypothesis' explains why. Existing homeowners derive substantial wealth from their houses, and that wealth depends on housing scarcity. New construction in their neighborhood threatens their property value, increases congestion and parking pressure, and may change the social composition of the neighborhood. They are organized: they show up at city council meetings, they vote in local elections, and they form neighborhood associations to oppose specific projects. Their political weight at the local level is enormous.

The beneficiaries of new construction are dispersed and largely absent from local politics. Future residents do not yet live in the city. Current renters are mobile, often young, and politically less engaged at the local level. Workers commuting from distant suburbs because they cannot afford to live near their jobs are not voters in the city where the construction would occur. The result is a systematic asymmetry: every individual housing project faces concentrated opposition from immediate neighbors, while the benefits are spread across people who do not participate in the decision.

This is why reform has come primarily from state legislatures rather than local councils. State legislatures aggregate larger constituencies, including renters and would-be residents whose voice is drowned out at the local level. The recent wave of state-level housing reform (California SB 9 and SB 10, Oregon HB 2001, Washington 2023 missing-middle reform, Massachusetts MBTA Communities Act, New York Governor Hochul's housing compact) represents the political response to local-level dysfunction. State preemption is the technically and politically appropriate response when local decision-makers systematically fail to balance the relevant interests.

Federal involvement has been more limited. The U.S. has not used federal infrastructure spending or housing programs as leverage for local zoning reform, though some proposals would tie federal funding to demonstrated commitment to housing production. The federal lever is potentially powerful but politically constrained, partly because federalism resists federal intervention in zoning.

VII. Counter-Arguments and Responses

Three serious counter-arguments deserve direct response.

First, new market-rate housing does not help low-income households. This is the most common objection, and it has been empirically tested. Mast (2023) and Asquith, Mast, and Reed (2021) show that new market-rate construction reduces rents in nearby buildings, including older and lower-rent buildings, through filtering. The mechanism is the household-mobility chain: new construction at any price point eventually frees up units at lower price points. The empirical evidence is now strong enough that 'new luxury housing doesn't help' has become inconsistent with the data. The argument was reasonable a priori; it is no longer reasonable given the evidence.

Second, demand-side factors are decisive. Income inequality, foreign capital, and financialization are real and concerning, but the cross-metro pattern is impossible to reconcile with their being decisive. If demand factors were decisive, we would expect them to produce similar effects in metros with similar demand pressures. Houston and Los Angeles have similar income growth and similar economic dynamism; their housing cost trajectories differ by an order of magnitude. The supply restriction is what differs. The demand explanations are not wrong, but they are second-order.

Third, zoning serves legitimate purposes. Zoning was created to separate incompatible land uses (chemical plants from residential neighborhoods), to coordinate infrastructure, to protect health and safety, and to preserve neighborhood character. These purposes are legitimate, but they do not require the kind of dense restriction that current zoning imposes. Allowing duplexes on single-family lots does not threaten the legitimate purposes of zoning. Allowing taller buildings near transit does not endanger residents. Allowing accessory dwelling units does not destroy neighborhoods. The reforms argued for here are not the elimination of zoning but the reduction of zoning to what its legitimate purposes require, eliminating the dense thicket of restrictions that protect incumbent property values at the cost of housing access for others. Houston, with very limited zoning, has not become a dystopia of chemical plants next to homes. Other forms of regulation (deed restrictions, nuisance law) handle the legitimate concerns.

Conclusion

The U.S. housing affordability crisis is solvable. The diagnosis is clear: zoning restrictions in coastal metros prevent supply from rising to meet demand, producing sustained price escalation that has imposed enormous costs on younger Americans, on national productivity, and on the political stability of housing-constrained regions. The treatment is clear: reduce the regulatory cost of building housing through upzoning, ADU permitting, by-right development, streamlined permitting, and state preemption of local restrictions.

The obstacle is political. Existing homeowners benefit from scarcity and have outsized political influence at the local level. State legislatures have begun to override local dysfunction, and the early evidence from successful reform jurisdictions confirms that supply responds to permission. The reforms work where implemented.

The cost of inaction rises each year. Each year of inadequate housing production locks in further generational inequality, further reduces geographic mobility, and further concentrates housing wealth among incumbents. Each year more young Americans abandon homeownership and family formation as economically out of reach. The political coalition for redistributive responses (rent control, public housing at scale, breakup of large landlords) grows as the supply-side reforms remain inadequate. These responses can ameliorate symptoms but cannot eliminate the underlying scarcity, and may worsen it.

The intellectual case for supply-side housing reform is overwhelming. The empirical evidence is strong. The successful reform examples exist and are accumulating. What remains is political will, and political will is responsive to evidence and to advocacy. This paper has argued that the evidence points clearly in one direction, and that the cost of not acting in that direction is rising every year. The housing crisis is a zoning crisis, and it is past time to treat it as one.`,
  },
];

export function moduleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function moduleIndexById(id: string): number {
  return modules.findIndex((m) => m.id === id);
}
