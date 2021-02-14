var documenterSearchIndex = {"docs":
[{"location":"delta/#δ-Distributions-1","page":"δ-Distributions","title":"δ-Distributions","text":"","category":"section"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"Maximum likelihood (ML) and Maximum A Posteriori inference are special cases of Bayesian inference where the posterior is assumed to be a Dirac δ distribution:","category":"page"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"beginaligned\ndelta_mu(x) = delta(x - mu) = begincases\n    infty textif  x - mu = 0 \n    0  textotherwise\nendcases \nint_x delta_mu(x) textdx = 1\nendaligned","category":"page"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"To easily switch between Bayesian inference ML/MAP, the package provides the δ-distributions, i.e. Dirac δ dsistribution wrap around an \"equivalent\" distribution member of the exponential family.","category":"page"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"δDistribution","category":"page"},{"location":"delta/#ExpFamilyDistributions.δDistribution","page":"δ-Distributions","title":"ExpFamilyDistributions.δDistribution","text":"abstract type δDistribution\n\nSupertype for the δ-distributions.\n\n\n\n\n\n","category":"type"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"Each subtype of δDistribution implements partially the Exponential Family interface:","category":"page"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"gradlognorm\nmean\nupdate!","category":"page"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"where gradlognorm returns the expectation of the equivalent distribution's sufficient statistics, mean returns the Dirac δ pulse location mu and update! sets the pulse location to the maximum of the equivalent distribution.","category":"page"},{"location":"delta/#δ-Normal-distribution-1","page":"δ-Distributions","title":"δ-Normal distribution","text":"","category":"section"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"δNormal\nδNormalDiag","category":"page"},{"location":"delta/#ExpFamilyDistributions.δNormal","page":"δ-Distributions","title":"ExpFamilyDistributions.δNormal","text":"mutable struct δNormal{T,D} <: δDistribution\n    μ\nend\n\nThe δ-equivalent of the Normal distribution.\n\nConstructors\n\nδNormal{T,D}()\nδNormal(μ)\n\nwhere T is the encoding type of the parameters and D is the dimension of the support and μ is the location of the Dirac δ pulse.\n\nExamples\n\njulia> δNormal{Float32,2}()\nδNormal{Float32,2}:\n  μ = Float32[0.0, 0.0]\n\njulia> δNormal([1.0, 1.0])\nδNormal{Float64,2}:\n  μ = [1.0, 1.0]\n\n\n\n\n\n","category":"type"},{"location":"delta/#ExpFamilyDistributions.δNormalDiag","page":"δ-Distributions","title":"ExpFamilyDistributions.δNormalDiag","text":"mutable struct δNormalDiag{T,D} <: δDistribution\n    μ\nend\n\nThe δ-equivalent of the NormalDiag distribution.\n\nConstructors\n\nδNormalDiag{T,D}()\nδNormalDiag(μ)\n\nwhere T is the encoding type of the parameters, D is the dimension of the support and μ is the location of the Dirac δ pulse.\n\nExamples\n\njulia> δNormalDiag{Float32, 2}()\nδNormalDiag{Float32,2}:\n  μ = Float32[0.0, 0.0]\n\njulia> δNormalDiag([1.0, 1.0])\nδNormalDiag{Float64,2}:\n  μ = [1.0, 1.0]\n\n\n\n\n\n","category":"type"},{"location":"delta/#δ-Gamma-distribution-1","page":"δ-Distributions","title":"δ-Gamma distribution","text":"","category":"section"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"δGamma","category":"page"},{"location":"delta/#ExpFamilyDistributions.δGamma","page":"δ-Distributions","title":"ExpFamilyDistributions.δGamma","text":"mutable struct δGamma{T} <: δDistribution\n    μ\nend\n\nThe δ-equivaltent of the Gamma distribution.\n\nConstructors\n\nδGamma{T}()\nδGamma{T}(μ)\n\nwhere T is the encoding type of the parameters and μ is the location of the Dirac δ pulse.\n\nExamples\n\njulia> δGamma{Float32}()\nδGamma{Float32}:\n  μ = 1.0\n\njulia> δGamma{Float64}(2)\nδGamma{Float64}:\n  μ = 2.0\n\n\n\n\n\n","category":"type"},{"location":"delta/#δ-Dirichlet-distribution-1","page":"δ-Distributions","title":"δ-Dirichlet distribution","text":"","category":"section"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"δDirichlet","category":"page"},{"location":"delta/#ExpFamilyDistributions.δDirichlet","page":"δ-Distributions","title":"ExpFamilyDistributions.δDirichlet","text":"mutable struct Dirichlet{T,D} <: δDistribution\n    μ\nend\n\nThe δ-equivalent of the Dirichlet distribution.\n\nConstructors\n\nDirichlet{T,D}()\nDirichlet(μ)\n\nwhere T is the encoding type of the parameters and D is the dimension of the support and μ is the location of the Dirac δ pulse.\n\nExamples\n\njulia> δDirichlet{Float32, 2}()\nδDirichlet{Float32,2}:\n  μ = Float32[0.5, 0.5]\n\njulia> δDirichlet(Float32[1/2, 1/2])\nδDirichlet{Float32,2}:\n  μ = Float32[0.5, 0.5]\n\n\n\n\n\n","category":"type"},{"location":"delta/#δ-Wishart-distribution-1","page":"δ-Distributions","title":"δ-Wishart distribution","text":"","category":"section"},{"location":"delta/#","page":"δ-Distributions","title":"δ-Distributions","text":"δWishart","category":"page"},{"location":"delta/#ExpFamilyDistributions.δWishart","page":"δ-Distributions","title":"ExpFamilyDistributions.δWishart","text":"mutable struct δWishart{T,D} <: δDistribution\n    μ\nend\n\nThe δ-equivaltent of the Wishart distribution.\n\nConstructors\n\nδWishart{T,D}()\nδWishart(μ)\n\nwhere T is the encoding type of the parameters and μ is the location of the Dirac δ pulse.\n\nExamples\n\njulia> δWishart{Float32,2}()\nδWishart{Float32,2}:\n  μ = Float32[1.0 0.0; 0.0 1.0]\n\njulia> using LinearAlgebra; δWishart(Symmetric([1 0.5; 0.5 1]))\nδWishart{Float64,2}:\n  μ = [1.0 0.5; 0.5 1.0]\n\n\n\n\n\n","category":"type"},{"location":"expfamily/#Exponential-Family-Distributions-1","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"","category":"section"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"All the distributions provided by this package are members of the exponential family of distribution, i.e. they have the follotwing canonical form:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"p(x) = exp  eta^top T(x) - A(eta) + B(x) ","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"where:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"eta is the natural parameter (scalar or vector)\nT(x) is the sufficient statistic (scalar or vector)\nA(eta) is the log-normalizer (scalar)\nB(x) is the base measure (scalar)","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Practically, the package provide the following abstract type","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"ExpFamilyDistribution","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.ExpFamilyDistribution","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.ExpFamilyDistribution","text":"abstract type ExpFamilyDistribution end\n\nSupertype for distributions member of the exponential family.\n\n\n\n\n\n","category":"type"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Each subtype of ExpFamilyDistribution implements the following interface:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"basemeasure\ngradlognorm\nkldiv\nloglikelihood\nlognorm\nmean\nnaturalparam\nsample\nstats\nstdparam\nupdate!","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"basemeasure\ngradlognorm\nkldiv\nlognorm\nloglikelihood\nmean\nnaturalparam\nsample\nstats\nstdparam\nupdate!","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.basemeasure","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.basemeasure","text":"basemeasure(p, x)\n\nReturns the base measure of x for the distribution p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.gradlognorm","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.gradlognorm","text":"gradlognorm(p)\n\nReturns the gradient of the log-normalizer of p w.r.t. its natural parameters.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.kldiv","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.kldiv","text":"kldiv(q::T, p::T) where T<:ExpFamilyDistribution\n\nCompute the KL-divergence between two distributions of the same type (i.e. kldiv(Normal, Normal), kldiv(Dirichlet, Dirichlet), ...)\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.lognorm","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.lognorm","text":"lognorm(p)\n\nReturns the log-normalization constant of p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.loglikelihood","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.loglikelihood","text":"loglikelihood(p, x)\n\nReturns the log-likelihood of x for the distribution p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.mean","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.mean","text":"mean(p)\n\nReturns the mean of the distribution p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.naturalparam","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.naturalparam","text":"naturalparam(p)\n\nReturns the natural parameters of p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.sample","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.sample","text":"sample(p[, n=1])\n\nDraw n samples from the distribution p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.stats","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.stats","text":"stats(p, x)\n\nReturns the sufficient statistics of x for the distribution p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.stdparam","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.stdparam","text":"stdparam(p, η)\n\nReturns the standard parameters corresponding to the natural parameters η for distributions with the same type of p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.update!","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.update!","text":"update!(p, η)\n\nUpdates the parameters given a new natural parameter η.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#Multivariate-Normal-distribution-1","page":"Exponential Family Distributions","title":"Multivariate Normal distribution","text":"","category":"section"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Likelihood:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"mathcalN(mu Sigma) = frac1(2pi)^fracD2  Sigma\n^frac12 exp big -frac12 (x - mu)^top Sigma^-1 (x -\nmu) big","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Terms of the canonical form:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"beginaligned\n    eta = beginbmatrix\n        Sigma^-1 mu \n        -frac12textvec(Sigma^-1)\n    endbmatrix \n\n    T(x) = beginbmatrix\n        x \n        textvec(xx^top)\n    endbmatrix \n\n    A(eta) = frac12 ln Sigma + frac12 mu^top\n        Sigma^-1mu \n\n    B(x) = -fracD2 ln 2pi \n\n    nabla_eta A(eta) = beginbmatrix\n        mu \n        Sigma + mu mu^top\n    endbmatrix\nendaligned","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Normal\nNormalDiag","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.Normal","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.Normal","text":"mutable struct Normal{T,D} <: ExpFamilyDistribution\n    μ\n    Σ\nend\n\nNormal distribution with full covariance matrix.\n\nConstructors\n\nNormal{T,D}()\nNormal(μ[, Σ])\n\nwhere T is the encoding type of the parameters, D is the dimension of the support, μ is a vector and Σ is a symmetric matrix.\n\nExamples\n\njulia> Normal{Float32,2}()\nNormal{Float32,2}:\n  μ = Float32[0.0, 0.0]\n  Σ = Float32[1.0 0.0; 0.0 1.0]\n\njulia> Normal([1.0, 1.0])\nNormal{Float64,2}:\n  μ = [1.0, 1.0]\n  Σ = [1.0 0.0; 0.0 1.0]\n\njulia> using LinearAlgebra; Normal([1.0, 1.0], Symmetric([2.0 0.5; 0.5 1.0]))\nNormal{Float64,2}:\n  μ = [1.0, 1.0]\n  Σ = [2.0 0.5; 0.5 1.0]\n\n\n\n\n\n","category":"type"},{"location":"expfamily/#ExpFamilyDistributions.NormalDiag","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.NormalDiag","text":"mutable struct NormalDiag{T,D} <: ExpFamilyDistribution\n    μ\n    v\nend\n\nNormal distribution with a diagonal covariance matrix. v is the diagonal of the covariance matrix. Note that you can still access the full covariance matrix by using the property Σ.\n\nConstructors\n\nNormalDiag{T,D}()\nNormalDiag(μ[, v])\n\nwhere T is the encoding type of the parameters, D is the dimension of the support, μ is a vector and v is the diagonal of the covariance matrix.\n\nExamples\n\njulia> NormalDiag{Float32, 2}()\nNormalDiag{Float32,2}\n  μ = Float32[0.0, 0.0]\n  v = Float32[1.0, 1.0]\n\njulia> NormalDiag([1.0, 1.0])\nNormalDiag{Float64,2}\n  μ = [1.0, 1.0]\n  v = [1.0, 1.0]\n\njulia> NormalDiag([1.0, 1.0], [2.0, 1.0])\nNormalDiag{Float64,2}\n  μ = [1.0, 1.0]\n  v = [2.0, 1.0]\n\n\n\n\n\n","category":"type"},{"location":"expfamily/#Gamma-distribution-1","page":"Exponential Family Distributions","title":"Gamma distribution","text":"","category":"section"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Likelihood:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"mathcalG(x  alpha beta) = frac1Gamma (alpha)beta^alpha x^alpha - 1 exp  -beta x ","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Terms of the canonical form:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"beginaligned\n    eta = beginbmatrix\n        -beta  \n        alpha\n    endbmatrix \n\n    T(x) = beginbmatrix\n        x \n        ln x\n    endbmatrix \n\n    A(eta) = ln Gamma(alpha) - alpha ln beta \n\n    B(x) = -ln x \n\n    nabla_eta A(eta) = beginbmatrix\n        fracalphabeta \n        psi(alpha) - lnbeta\n    endbmatrix\nendaligned","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Gamma","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.Gamma","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.Gamma","text":"mutable struct Gamma{T} <: ExpFamilyDistribution\n    α\n    β\nend\n\nGamma distribution.\n\nConstructors\n\nGamma{T}()\nGamma{T}(α, β)\n\nwhere T is the encoding type of the parameters. α and β are the parameters of the distribution.\n\nExamples\n\njulia> Gamma{Float32}()\nGamma{Float32}:\n  α = 1.0\n  β = 1.0\n\njulia> Gamma{Float64}(1, 2)\nGamma{Float64}:\n  α = 1.0\n  β = 2.0\n\n\n\n\n\n","category":"type"},{"location":"expfamily/#Dirichlet-distribution-1","page":"Exponential Family Distributions","title":"Dirichlet distribution","text":"","category":"section"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Likelihood:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"mathcalD(x  alpha) = fracGamma(sum_i=1^D alpha_i)prod_i=1^DGamma (alpha_i)\n    prod_i=1^D x_i^alpha - 1","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Terms of the canonical form:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"beginaligned\n    eta = alpha \n\n    T(x) = ln x \n\n    A(eta) = sum_i=1^D ln Gamma(alpha_i) - ln Gamma(sum_i=1^D alpha_i) \n\n    B(x) = -ln x \n\n    nabla_eta A(eta) = beginbmatrix\n        psi(alpha_1) - psi(sum_i=1^D alpha_i) \n        vdots \n        psi(alpha_D) - psi(sum_i=1^D alpha_i) \n    endbmatrix\nendaligned","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Dirichlet","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.Dirichlet","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.Dirichlet","text":"mutable struct Dirichlet{T,D} <: ExpFamilyDistribution\n    α\nend\n\nDirichlet distribution.\n\nConstructors\n\nDirichlet{T,D}()\nDirichlet(α)\n\nwhere T is the encoding type of the parameters and D is the dimension of the support and α is a vector of parameters.\n\nExamples\n\njulia> Dirichlet{Float32, 2}()\nDirichlet{Float32,2}:\n  α = Float32[1.0, 1.0]\n\njulia> Dirichlet([1.0, 2.0, 3.0])\nDirichlet{Float64,3}:\n  α = [1.0, 2.0, 3.0]\n\n\n\n\n\n","category":"type"},{"location":"expfamily/#Wishart-distribution-1","page":"Exponential Family Distributions","title":"Wishart distribution","text":"","category":"section"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Likelihood:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"mathcalW(X  W v) = B(W v)X^frac(v-D-1)2 exp bigg\n    -frac12 texttr(W^-1X) bigg \nB(Wv) = W^-fracv2bigg( 2^fracvD2 pi^fracD(D-1)4\n    prod_i=1^D Gamma big( fracv+1-i2 big) bigg)^-1","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"where X and W are D times D symmetric positive definite matrices.","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Terms of the canonical form:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"beginaligned\n    eta = beginbmatrix\n        textvec(-frac12 W^-1) \n        fracv2\n    endbmatrix\n\n    T(x) = beginbmatrix\n        textvec(X) \n        ln X\n    endbmatrix \n\n    A(eta) = fracv2 ln W + fracvD2 ln 2\n        + sum_i=1^D ln Gamma big( fracv+1-i2 big) \n\n    B(x) = -frac(D-1)2 ln X - fracD(D-1)4 ln pi     \n\n    nabla_eta A(eta) = beginbmatrix\n        textvec(vW) \n        ln W + D ln 2 + sum_i=1^D psi big( fracv+1-i2 big)\n    endbmatrix\nendaligned","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Wishart","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.Wishart","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.Wishart","text":"mutable struct Wishart{T, D} <: ExpFamilyDistribution\n    W\n    v\nend\n\nWishart distribution.\n\nConstructors\n\nWishart{T,D}()\nWishart(W[, v])\n\nwhere T is the encoding type of the parameters and W is a symmetric DxD matrix.\n\nExamples\n\njulia> Wishart{Float32,2}()\nWishart{Float32,2}:\n  W = Float32[1.0 0.0; 0.0 1.0]\n  v = 2.0\n\njulia> using LinearAlgebra; Wishart(Symmetric([1 0.5; 0.5 1]))\nWishart{Float64,2}:\n  W = [1.0 0.5; 0.5 1.0]\n  v = 2.0\n\n\n\n\n\n","category":"type"},{"location":"#ExpFamilyDistributions-1","page":"Home","title":"ExpFamilyDistributions","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"ExpFamilyDistributions is a Julia package for using distributions member of the Exponential family. This package is mostly designed to build machine learning Bayesian models. For a general purpose statistical Julia package we recommend to use Distributions.jl.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"See the project on github.","category":"page"},{"location":"#Authors-1","page":"Home","title":"Authors","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Lucas Ondel, Brno University of technology, 2020.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The package can be installed with the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"pkg> add ExpFamilyDistributions","category":"page"},{"location":"#Manual-Outline-1","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\"expfamily.md\", \"delta.md\"]\nDepth = 3","category":"page"}]
}
