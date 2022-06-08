var documenterSearchIndex = {"docs":
[{"location":"man/reference.html#Types","page":"Types","title":"Types","text":"","category":"section"},{"location":"man/reference.html#Problem","page":"Types","title":"Problem","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkProblem","category":"page"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Problem","category":"page"},{"location":"man/reference.html#Sparspak.SpkProblem.Problem","page":"Types","title":"Sparspak.SpkProblem.Problem","text":"\n\n\n\n","category":"type"},{"location":"man/reference.html#Sparse-LU-Solver","page":"Types","title":"Sparse LU Solver","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkSparseSolver","category":"page"},{"location":"man/reference.html","page":"Types","title":"Types","text":"SparseSolver","category":"page"},{"location":"man/reference.html#Elimination-Trees","page":"Types","title":"Elimination Trees","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkETree","category":"page"},{"location":"man/reference.html","page":"Types","title":"Types","text":"ETree","category":"page"},{"location":"man/reference.html#Sparspak.SpkETree.ETree","page":"Types","title":"Sparspak.SpkETree.ETree","text":"\n\n\n\n","category":"type"},{"location":"man/reference.html#Graphs","page":"Types","title":"Graphs","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkGraph","category":"page"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Graph","category":"page"},{"location":"man/reference.html#Sparspak.SpkGraph.Graph","page":"Types","title":"Sparspak.SpkGraph.Graph","text":"This routine constructs a graph from a problem object.\n\n\n\nIt does not check that the problem object contains a structurally   symmetric matrix, since sometimes only the lower or upper triangle of   a symmetric matrix may be stored. There are routines in this module to   make a given graph object structurally symmetric.\n\n\n\nInput:   g - the graph object, declared by the calling routine   p - the problem object, used to create the graph   diagonal - indicates that the diagonal elements are included. If     diagonal is not given, the adjacency structure does not include     the diagonal elements.   objectName - (optional) name to be assigned to g. Updated Parameter:    g - created graph object.\n\n\n\n\n\n","category":"type"},{"location":"man/reference.html#Ordering","page":"Types","title":"Ordering","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkOrdering","category":"page"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Ordering","category":"page"},{"location":"man/reference.html#Sparspak.SpkOrdering.Ordering","page":"Types","title":"Sparspak.SpkOrdering.Ordering","text":"ConstructOrdering constructs an ordering object. Since only one   parameter (nRows) is supplied, it is assumed that the size of the   row ordering and column ordering are the same. That is, that the   matrix is square. Input Parameters:   order - the ordering (declared in the calling program)   nRows - the number of rows (and columns) in the matrix   objectName - the name of the ordering object (optional) Output Parameter:    order - the updated ordering object\n\n\n\n\n\nConstructOrdering2 constructs an ordering object. The arrays   rPerm, cPerm, rInvp, cInvp are allocated and initialized to   the identity permutation. Input Parameter:   order - the ordering (declared in the calling program)   nRows, nCols - the number of rows and columns in the matrix   objectName - the name of the ordering object (optional) Output Parameter:    order - the updated ordering object\n\n\n\n\n\n","category":"type"},{"location":"man/reference.html#Grid","page":"Types","title":"Grid","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkGrid","category":"page"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Grid","category":"page"},{"location":"man/reference.html#Sparspak.SpkGrid.Grid","page":"Types","title":"Sparspak.SpkGrid.Grid","text":"\n\n\n\n","category":"type"},{"location":"man/reference.html#Functions","page":"Types","title":"Functions","text":"","category":"section"},{"location":"man/reference.html#Problem-2","page":"Types","title":"Problem","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkProblem","category":"page"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Problem(nrows::IT, ncols::IT, nnz::IT=2500, z::FT=0.0, info = \"\") where {IT, \n    FT}\ninaij!\ninbi!\ninsparse!\ninfullrhs!\noutsparse\ncomputeresidual\nmakerhs\nmakegridproblem","category":"page"},{"location":"man/reference.html#Sparspak.SpkProblem.makerhs","page":"Types","title":"Sparspak.SpkProblem.makerhs","text":"This routine constructs the RHS of a problem given an x for the   equation Ax = rhs The x must have the same number of elements   as the problem (represented by A above) has columns   If x is not present  a right hand side is contructed so that   (a the) solution is 1 2 3 m Input Parameter   x - the vector in the equationAx = rhs\"\"   mType - matrix type (optional). If the matrix is symmetric and only             the lower or upper triangle is present, the user must let             the routine know this by setting mType to one of:                 \"L\" or \"l\" - when only the lower triangle is present                 \"U\" or \"u\" - when only the upper triangle is present                 \"T\" or \"t\" - when either the lower or upper triangle is                              present. Updated Parameter:    p - the problem for which the RHS is being constructed.\n\n\n\n\n\n","category":"function"},{"location":"man/reference.html#Sparse-LU-Solver-2","page":"Types","title":"Sparse LU Solver","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkSparseSolver","category":"page"},{"location":"man/reference.html","page":"Types","title":"Types","text":"SparseSolver\nfindorder!\nfindorderperm!\nsymbolicfactor!\ninmatrix!\nfactor!\ntriangularsolve!\nsolve!","category":"page"},{"location":"man/reference.html#Graphs-2","page":"Types","title":"Graphs","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Modules = [Sparspak.SpkGraph]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/reference.html#Ordering-2","page":"Types","title":"Ordering","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Modules = [Sparspak.SpkOrdering]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/reference.html#Multiple-minimum-degree-(MMD)-ordering.","page":"Types","title":"Multiple minimum degree (MMD) ordering.","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Modules = [Sparspak.SpkMmd]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/reference.html#Elimination-Trees-2","page":"Types","title":"Elimination Trees","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Modules = [Sparspak.SpkETree]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/reference.html#Symbolic-Factorization","page":"Types","title":"Symbolic Factorization","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Modules = [Sparspak.SpkSymfct]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/reference.html#Grid-2","page":"Types","title":"Grid","text":"","category":"section"},{"location":"man/reference.html","page":"Types","title":"Types","text":"Modules = [Sparspak.SpkGrid]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"guide/guide.html","page":"Guide","title":"Guide","text":"Table of contents","category":"page"},{"location":"guide/guide.html#Guide","page":"Guide","title":"Guide","text":"","category":"section"},{"location":"index.html#Sparspak-Documentation","page":"Home","title":"Sparspak Documentation","text":"","category":"section"},{"location":"index.html#Package-features","page":"Home","title":"Package features","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Solves systems of coupled linear algebraic equations with a sparse coefficient matrix.\nReorderings of various kinds are supported, including the Multiple Minimum Degree (MMD).\nFactorizations of various kinds are supported.\nSolutions with multiple right hand sides, and solutions with preserved structure but changed matrix coefficients are supported. ","category":"page"},{"location":"index.html#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"The latest release of Sparspak can be installed from the Julia REPL prompt with","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"julia> ]add Sparspak","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"The closing square bracket switches to the package manager interface and the add commands installs Sparspak and any missing dependencies.  To return to the Julia REPL hit the delete key.","category":"page"},{"location":"index.html#Simple-usage","page":"Home","title":"Simple usage","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"This code makes up a random-coefficient (but diagonally dominant) sparse matrix and a simple right hand side vector. The sparse linear algebraic equation problem is then solved with the LU factorization. The solution is tested against the solution with the built-in solver.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using LinearAlgebra\nusing SparseArrays\nusing Sparspak.Problem: Problem, insparse!, outsparse, infullrhs!\nusing Sparspak.SparseSolver: SparseSolver, solve!\n\nfunction _test()\n    n = 1357\n    A = sprand(n, n, 1/n)\n    A = -A - A' + 20 * LinearAlgebra.I\n    \n    p = Problem(n, n)\n    insparse!(p, A);\n    infullrhs!(p, 1:n);\n    \n    s = SparseSolver(p)\n    solve!(s, p)\n    A = outsparse(p)\n    x = A \\ p.rhs\n    @show norm(p.x - x) / norm(x) < 1.0e-6\n\n    return true\nend\n\n_test()","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"For more details see the file test/test_sparse_method.jl, module msprs016.","category":"page"},{"location":"index.html#User-guide","page":"Home","title":"User guide","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Pages = [\n    \"guide/guide.md\",\n]\nDepth = 1","category":"page"},{"location":"index.html#Reference-Manual","page":"Home","title":"Reference Manual","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"The description of the types and the functions, organized by module and/or other logical principle.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Pages = [\n    \"man/reference.md\",\n]\nDepth = 3","category":"page"},{"location":"man/types.html#Types","page":"Types","title":"Types","text":"","category":"section"},{"location":"man/types.html#Problem","page":"Types","title":"Problem","text":"","category":"section"},{"location":"man/types.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkProblem","category":"page"},{"location":"man/types.html","page":"Types","title":"Types","text":"Problem\nOrder = [:type]","category":"page"},{"location":"man/types.html#Sparse-LU-Solver","page":"Types","title":"Sparse LU Solver","text":"","category":"section"},{"location":"man/types.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkSparseSolver","category":"page"},{"location":"man/types.html","page":"Types","title":"Types","text":"SparseSolver\nOrder = [:type]","category":"page"},{"location":"man/types.html#Elimination-Trees","page":"Types","title":"Elimination Trees","text":"","category":"section"},{"location":"man/types.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkETree","category":"page"},{"location":"man/types.html","page":"Types","title":"Types","text":"ETree\nOrder = [:type]","category":"page"},{"location":"man/types.html#Graphs","page":"Types","title":"Graphs","text":"","category":"section"},{"location":"man/types.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkGraph","category":"page"},{"location":"man/types.html","page":"Types","title":"Types","text":"Graph\nOrder = [:type]","category":"page"},{"location":"man/types.html#Ordering","page":"Types","title":"Ordering","text":"","category":"section"},{"location":"man/types.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkOrdering","category":"page"},{"location":"man/types.html","page":"Types","title":"Types","text":"Ordering\nOrder = [:type]","category":"page"},{"location":"man/types.html#Grid","page":"Types","title":"Grid","text":"","category":"section"},{"location":"man/types.html","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkGrid","category":"page"},{"location":"man/types.html","page":"Types","title":"Types","text":"Grid\nOrder = [:type]","category":"page"},{"location":"man/functions.html#Functions","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"man/functions.html#Problem","page":"Functions","title":"Problem","text":"","category":"section"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"CurrentModule = Sparspak.SpkProblem","category":"page"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"Problem(nrows::IT, ncols::IT, nnz::IT=2500, z::FT=0.0, info = \"\") where {IT, \n    FT}\ninaij!\ninbi!\ninsparse!\ninfullrhs!\noutsparse\ncomputeresidual\nmakerhs!\nmakegridproblem","category":"page"},{"location":"man/functions.html#Sparspak.SpkProblem.Problem-Union{Tuple{FT}, Tuple{IT}, Tuple{IT, IT}, Tuple{IT, IT, IT}, Tuple{IT, IT, IT, FT}, Tuple{IT, IT, IT, FT, Any}} where {IT, FT}","page":"Functions","title":"Sparspak.SpkProblem.Problem","text":"\n\n\n\n","category":"method"},{"location":"man/functions.html#Sparspak.SpkProblem.makegridproblem","page":"Functions","title":"Sparspak.SpkProblem.makegridproblem","text":"This routine fills in a Problem object using a given Grid. Input Parameters:   g - the Grid to be used to fill a Problem matrix   stencil - an optional variable specifying the difference operator             to be applied to the grid. Output Parameter:    p - the Problem object to be filled\n\n\n\n\n\nThis routine constructs a Grid object given an H and K, and fills in a   Problem object using this Grid. Input Parameters:   h - the number of rows in the Grid   k - the number of columns in the Grid   stencil - an optional variable specifying the difference operator             to be applied to the grid. Output Parameter:    p - the Problem object to be filled\n\n\n\n\n\n","category":"function"},{"location":"man/functions.html#Sparse-LU-Solver","page":"Functions","title":"Sparse LU Solver","text":"","category":"section"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"CurrentModule = Sparspak.SpkSparseSolver","category":"page"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"SparseSolver\nfindorder!\nfindorderperm!\nsymbolicfactor!\ninmatrix!\nfactor!\ntriangularsolve!\nsolve!\nOrder = [:function]","category":"page"},{"location":"man/functions.html#Graphs","page":"Functions","title":"Graphs","text":"","category":"section"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"Modules = [Sparspak.SpkGraph]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/functions.html#Ordering","page":"Functions","title":"Ordering","text":"","category":"section"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"Modules = [Sparspak.SpkOrdering]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/functions.html#Multiple-minimum-degree-(MMD)-ordering.","page":"Functions","title":"Multiple minimum degree (MMD) ordering.","text":"","category":"section"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"Modules = [Sparspak.SpkMmd]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/functions.html#Elimination-Trees","page":"Functions","title":"Elimination Trees","text":"","category":"section"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"Modules = [Sparspak.SpkETree]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/functions.html#Symbolic-Factorization","page":"Functions","title":"Symbolic Factorization","text":"","category":"section"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"Modules = [Sparspak.SpkSymfct]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/functions.html#Grid","page":"Functions","title":"Grid","text":"","category":"section"},{"location":"man/functions.html","page":"Functions","title":"Functions","text":"Modules = [Sparspak.SpkGrid]\nPrivate = true\nOrder = [:function]","category":"page"}]
}
