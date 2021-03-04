var documenterSearchIndex = {"docs":
[{"location":"expfamily/#Exponential-Family-Distributions-1","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"","category":"section"},{"location":"expfamily/#Exponential-Family-1","page":"Exponential Family Distributions","title":"Exponential Family","text":"","category":"section"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"All the distributions provided by this package are members of the exponential family of distribution, i.e. they have the follotwing canonical form:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"p(x) = exp  eta^top T(x) - A(eta) + B(x) ","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"where:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"eta is the natural parameter (scalar or vector)\nT(x) is the sufficient statistic (scalar or vector)\nA(eta) is the log-normalizer (scalar)\nB(x) is the base measure (scalar)","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Practically, the package provide the following abstract type","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Distribution","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.Distribution","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.Distribution","text":"abstract type Distribution end\n\nSupertype for distributions member of the exponential family.\n\n\n\n\n\n","category":"type"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Which represents the supter-type of members of the exponential family.","category":"page"},{"location":"expfamily/#Parameterization-1","page":"Exponential Family Distributions","title":"Parameterization","text":"","category":"section"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"All subtypes of Distribution have the following form:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"struct MyDistribution{P<:AbstractParam} <: Distribution\n    param::P\nend","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"This particular form allows each distribution to be agnostic to their concrete parameterization. The parameter type inherits from:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"AbstractParameter","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.AbstractParameter","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.AbstractParameter","text":"abstract type AbstractParameter{T} end\n\nAbstract type for parameters of a member of the exponential family.\n\n\n\n\n\n","category":"type"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"and supports the following methods","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"naturalform\nrealform\njacobian","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.naturalform","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.naturalform","text":"naturalform(param)\n\nReturns the natural form of the parameter.\n\nSee also: realform.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.realform","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.realform","text":"realform(param)\n\nReturns the vector of parameters as stored in param. Note that this function is just an accessor of the internal storage of the parameter, modifying the returned value should modify the parameter accordingly.\n\nSee also: naturalform.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.jacobian","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.jacobian","text":"jacobian(param)\n\nReturns the Jacobian of ξ (the real form) w.r.t. the natural form η.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#Distribution-interface-1","page":"Exponential Family Distributions","title":"Distribution interface","text":"","category":"section"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"Each subtype of [Distribution] implements the following interface:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"basemeasure\ngradlognorm\nkldiv\nloglikelihood\nlognorm\nsample\nsplitgrad\nstats\nstdparam","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"basemeasure\ngradlognorm\nkldiv\nlognorm\nloglikelihood\nsample\nsplitgrad\nstats\nstdparam","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.basemeasure","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.basemeasure","text":"basemeasure(p, x)\n\nReturns the base measure of x for the distribution p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.gradlognorm","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.gradlognorm","text":"gradlognorm(p)\n\nReturns the gradient of the log-normalizer of p w.r.t. its natural parameters.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.kldiv","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.kldiv","text":"kldiv(q::T, p::T[, μ = gradlognorm(q)]) where T<:Distribution\n\nCompute the KL-divergence between two distributions of the same type (i.e. kldiv(Normal, Normal), kldiv(Dirichlet, Dirichlet), ...). You can specify directly the expectation of the sufficient statistics μ.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.lognorm","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.lognorm","text":"lognorm(p)\n\nReturns the log-normalization constant of p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.loglikelihood","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.loglikelihood","text":"loglikelihood(p, x)\n\nReturns the log-likelihood of x for the distribution p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.sample","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.sample","text":"sample(p, n=1)\n\nDraw n samples from the distribution p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.splitgrad","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.splitgrad","text":"splitgrad(p, μ)\n\nSplit the gradient of the log-normalizer into its \"standard\" components. For instance, for the Normal distribution, the output will be the expected value of x and xxᵀ.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.stats","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.stats","text":"stats(p, x)\n\nReturns the sufficient statistics of x for the distribution p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.stdparam","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.stdparam","text":"stdparam(p, η)\n\nReturns the standard parameters corresponding to the natural parameters η for distributions with the same type of p.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#Utilities-1","page":"Exponential Family Distributions","title":"Utilities","text":"","category":"section"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"The package also provides the following utility functions:","category":"page"},{"location":"expfamily/#","page":"Exponential Family Distributions","title":"Exponential Family Distributions","text":"vec_tril\ninv_vec_tril\nmatrix","category":"page"},{"location":"expfamily/#ExpFamilyDistributions.vec_tril","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.vec_tril","text":"vec_tril(M)\n\nReturns the vectorized low-triangular part (diagonal not included) of the matrix.\n\nSee also inv_vec_tril, matrix.\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.inv_vec_tril","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.inv_vec_tril","text":"inv_vec_tril(v)\n\nReturns a lower triangular matrix from a vectorized form. The diagonal of the matrix is set to 0.\n\nSee also vec_tril, matrix\n\n\n\n\n\n","category":"function"},{"location":"expfamily/#ExpFamilyDistributions.matrix","page":"Exponential Family Distributions","title":"ExpFamilyDistributions.matrix","text":"matrix(diagM, trilM)\n\nReturns a symmetrix matrix from the diagonal and the \"tril\" form of a matrix.\n\nSee also vec_tril, inv_vec_tril\n\n\n\n\n\n","category":"function"},{"location":"dists/#Distributions-1","page":"Distributions","title":"Distributions","text":"","category":"section"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"We proved here the list of distribution implemented by the package.","category":"page"},{"location":"dists/#Multivariate-Normal-distribution-1","page":"Distributions","title":"Multivariate Normal distribution","text":"","category":"section"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Likelihood:","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"mathcalN(mu Sigma) = frac1(2pi)^fracD2  Sigma\n^frac12 exp big -frac12 (x - mu)^top Sigma^-1 (x -\nmu) big","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Terms of the canonical form:","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"beginaligned\n    eta = beginbmatrix\n        Sigma^-1 mu \n        -frac12textvec(textdiag(Sigma^-1)) \n        -textvec(texttril(Sigma^-1))\n    endbmatrix \n\n    T(x) = beginbmatrix\n        x \n        textvec(textdiag(xx^top)) \n        textvec(texttril(xx^top))\n    endbmatrix \n\n    A(eta) = frac12 ln Sigma + frac12 mu^top\n        Sigma^-1mu \n\n    B(x) = -fracD2 ln 2pi \n\n    nabla_eta A(eta) = beginbmatrix\n        mu \n        Sigma + mu mu^top\n    endbmatrix\nendaligned","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"where texttril is a function that returns the lower-triangular part of a matrix (diagonal not included).","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Normal\nNormalDiag","category":"page"},{"location":"dists/#ExpFamilyDistributions.Normal","page":"Distributions","title":"ExpFamilyDistributions.Normal","text":"struct Normal{P<:AbstractParameter,D} <: AbstractNormal{D}\n    param::P\nend\n\nNormal distribution with full covariance matrix.\n\nConstructors\n\nNormal(μ, Σ)\n\nwhere μ is the mean and Σ is the covariance matrix.\n\nExamples\n\njulia> Normal([1.0, 1.0], [2.0 0.5; 0.5 1.0])\nNormal{DefaultParameter{Array{Float64,1}},2}:\n  μ = [1.0, 1.0]\n  Σ = [2.0 0.5; 0.5 1.0]\n\n\n\n\n\n","category":"type"},{"location":"dists/#ExpFamilyDistributions.NormalDiag","page":"Distributions","title":"ExpFamilyDistributions.NormalDiag","text":"struct NormalDiag{P<:AbstractParameter,D} <: AbstractNormalDiag{D}\n    param::P\nend\n\nNormal distribution with a diagonal covariance matrix.\n\nConstructors\n\nNormalDiag(μ, v)\n\nwhere μ is the mean v is the diagonal of the covariance matrix.\n\nExamples\n\njulia> NormalDiag([1.0, 1.0], [2.0, 1.0])\nNormalDiag{DefaultParameter{Array{Float64,1}},2}:\n  μ = [1.0, 1.0]\n  Σ = [2.0 0.0; 0.0 1.0]\n\n\n\n\n\n","category":"type"},{"location":"dists/#Gamma-distribution-1","page":"Distributions","title":"Gamma distribution","text":"","category":"section"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Likelihood:","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"mathcalG(x  alpha beta) = frac1Gamma (alpha)beta^alpha x^alpha - 1 exp  -beta x ","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Terms of the canonical form:","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"beginaligned\n    eta = beginbmatrix\n        -beta  \n        alpha\n    endbmatrix \n\n    T(x) = beginbmatrix\n        x \n        ln x\n    endbmatrix \n\n    A(eta) = ln Gamma(alpha) - alpha ln beta \n\n    B(x) = -ln x \n\n    nabla_eta A(eta) = beginbmatrix\n        fracalphabeta \n        psi(alpha) - lnbeta\n    endbmatrix\nendaligned","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Gamma","category":"page"},{"location":"dists/#ExpFamilyDistributions.Gamma","page":"Distributions","title":"ExpFamilyDistributions.Gamma","text":"struct Gamma{P<:AbstractParameter} <: AbstractGamma\n    param::P\nend\n\nGamma distribution.\n\nConstructors\n\nGamma(α, β)\n\nwhere α and β are the shape and reate parameters of the distribution.\n\nExamples\n\njulia> Gamma(1, 2)\nGamma{DefaultParameter{Array{Float64,1}}}:\n  α = 1.0\n  β = 2.0\n\n\n\n\n\n","category":"type"},{"location":"dists/#Dirichlet-distribution-1","page":"Distributions","title":"Dirichlet distribution","text":"","category":"section"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Likelihood:","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"mathcalD(x  alpha) = fracGamma(sum_i=1^D alpha_i)prod_i=1^DGamma (alpha_i)\n    prod_i=1^D x_i^alpha - 1","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Terms of the canonical form:","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"beginaligned\n    eta = alpha \n\n    T(x) = ln x \n\n    A(eta) = sum_i=1^D ln Gamma(alpha_i) - ln Gamma(sum_i=1^D alpha_i) \n\n    B(x) = -ln x \n\n    nabla_eta A(eta) = beginbmatrix\n        psi(alpha_1) - psi(sum_i=1^D alpha_i) \n        vdots \n        psi(alpha_D) - psi(sum_i=1^D alpha_i) \n    endbmatrix\nendaligned","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Dirichlet","category":"page"},{"location":"dists/#ExpFamilyDistributions.Dirichlet","page":"Distributions","title":"ExpFamilyDistributions.Dirichlet","text":"struct Dirichlet{P<:AbstractParameter,D} <: AbstractDirichlet{D}\n    param::P\nend\n\nDirichlet distribution.\n\nConstructors\n\nDirichlet(α)\n\nwhere α is a vector of concentrations.\n\nExamples\n\njulia> Dirichlet([1.0, 2.0, 3.0])\nDirichlet{DefaultParameter{Array{Float64,1}},3}:\n  α = [1.0, 2.0, 3.0]\n\n\n\n\n\n","category":"type"},{"location":"dists/#Wishart-distribution-1","page":"Distributions","title":"Wishart distribution","text":"","category":"section"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Likelihood:","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"mathcalW(X  W v) = B(W v)X^frac(v-D-1)2 exp bigg\n    -frac12 texttr(W^-1X) bigg \nB(Wv) = W^-fracv2bigg( 2^fracvD2 pi^fracD(D-1)4\n    prod_i=1^D Gamma big( fracv+1-i2 big) bigg)^-1","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"where X and W are D times D symmetric positive definite matrices.","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Terms of the canonical form:","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"beginaligned\n    eta = beginbmatrix\n        textvec(-frac12 W^-1) \n        fracv2\n    endbmatrix\n\n    T(x) = beginbmatrix\n        textvec(diag(X)) \n        textvec(tril(X)) \n        ln X\n    endbmatrix \n\n    A(eta) = fracv2 ln W + fracvD2 ln 2\n        + sum_i=1^D ln Gamma big( fracv+1-i2 big) \n\n    B(x) = -frac(D-1)2 ln X - fracD(D-1)4 ln pi     \n\n    nabla_eta A(eta) = beginbmatrix\n        textvec(vW) \n        ln W + D ln 2 + sum_i=1^D psi big( fracv+1-i2 big)\n    endbmatrix\nendaligned","category":"page"},{"location":"dists/#","page":"Distributions","title":"Distributions","text":"Wishart","category":"page"},{"location":"dists/#ExpFamilyDistributions.Wishart","page":"Distributions","title":"ExpFamilyDistributions.Wishart","text":"struct Wishart{P<:AbstractParameter,D} <: AbstractWishart{D}\n    param::P\nend\n\nWishart distribution.\n\nConstructors\n\nWishart{D}()\nWishart(W[, v])\n\nwhere T is the encoding type of the parameters and W is a positive definite DxD matrix.\n\nExamples\n\njulia> Wishart([1 0.5; 0.5 1], 2)\nWishart{DefaultParameter{Array{Float64,1}},2}:\n  W = [1.0 0.5; 0.5 1.0]\n  v = 2.0\n\n\n\n\n\n","category":"type"},{"location":"#ExpFamilyDistributions-1","page":"Home","title":"ExpFamilyDistributions","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"ExpFamilyDistributions is a Julia package for using distributions member of the Exponential family. This package is mostly designed to build machine learning Bayesian models. For a general purpose statistical Julia package we recommend to use Distributions.jl.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"See the project on github.","category":"page"},{"location":"#Authors-1","page":"Home","title":"Authors","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Lucas Ondel, Brno University of technology, 2020.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The package can be installed with the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"pkg> add ExpFamilyDistributions","category":"page"},{"location":"#Manual-Outline-1","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\"expfamily.md\", \"dists.md\"]\nDepth = 3","category":"page"}]
}
