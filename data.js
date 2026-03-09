// ===================================
// COMPLETE 12-MONTH SDE JOURNEY DATA
// ===================================

const fullCurriculum = {
    // PHASE 1: MONTHS 1-3
    phase1: {
        month1: {
            title: "Month 1: Advanced Python + Arrays/Strings",
            totalProblems: 50,
            weeks: {
                week1_2: {
                    title: "Week 1-2: Python Deep Dive",
                    duration: "14 days",
                    topics: [
                        {
                            id: "decorators",
                            name: "Decorators",
                            description: "Function & class decorators, @property, @staticmethod, @classmethod",
                            subtopics: [
                                "Function decorators",
                                "Class decorators",
                                "@property, @staticmethod, @classmethod",
                                "functools.wraps",
                                "Decorator chaining"
                            ]
                        },
                        {
                            id: "generators",
                            name: "Generators & Iterators",
                            description: "yield keyword, iterator protocol, itertools module",
                            subtopics: [
                                "Iterator protocol (__iter__, __next__)",
                                "Generator functions with yield",
                                "Generator expressions",
                                "itertools (combinations, permutations, product)",
                                "Infinite generators"
                            ]
                        },
                        {
                            id: "context-managers",
                            name: "Context Managers",
                            description: "with statement, __enter__/__exit__, contextlib",
                            subtopics: [
                                "__enter__ and __exit__ methods",
                                "contextlib module",
                                "Custom context managers",
                                "Exception handling in context managers"
                            ]
                        },
                        {
                            id: "advanced-oop",
                            name: "Advanced OOP",
                            description: "MRO, ABC, dataclasses, dunder methods",
                            subtopics: [
                                "Method Resolution Order (MRO)",
                                "Abstract Base Classes (ABC)",
                                "Data classes (@dataclass)",
                                "__str__, __repr__, __eq__, __hash__",
                                "Multiple inheritance"
                            ]
                        },
                        {
                            id: "type-hints",
                            name: "Type Hints",
                            description: "Type annotations, Optional, Union, mypy",
                            subtopics: [
                                "Basic type annotations",
                                "Optional, Union, Any",
                                "List, Dict, Tuple typing",
                                "mypy static type checking",
                                "Type aliases"
                            ]
                        },
                        {
                            id: "functional",
                            name: "Functional Programming",
                            description: "Lambda, map/filter/reduce, comprehensions",
                            subtopics: [
                                "Lambda functions",
                                "map(), filter(), reduce()",
                                "List/Dict/Set comprehensions",
                                "Generator expressions",
                                "Partial functions"
                            ]
                        }
                    ],
                    dailySchedule: [
                        { day: "1-2", task: "Decorators + Context Managers (write 5 custom decorators)" },
                        { day: "3-4", task: "Generators + Itertools (solve 10 problems)" },
                        { day: "5-6", task: "Advanced OOP (implement 3 design patterns)" },
                        { day: "7", task: "Review + Build mini project (custom logging decorator)" },
                        { day: "8-9", task: "Type hints (add types to previous projects)" },
                        { day: "10-11", task: "Collections module (defaultdict, Counter, deque)" },
                        { day: "12-13", task: "Functional programming (15 problems)" },
                        { day: "14", task: "Review + Assessment" }
                    ],
                    resources: [
                        { type: "book", name: "Fluent Python by Luciano Ramalho", chapters: "Chapters 1-7" },
                        { type: "course", name: "Python Beyond the Basics", platform: "Pluralsight" },
                        { type: "practice", name: "Python Morsels exercises" }
                    ]
                },
                week3_4: {
                    title: "Week 3-4: Arrays & Strings DSA",
                    duration: "14 days",
                    totalProblems: 50,
                    categories: {
                        twoPointers: {
                            name: "Two Pointers",
                            count: 8,
                            problems: [
                                { id: "two-sum-ii", name: "Two Sum II (Sorted Array)", difficulty: "easy", leetcodeNum: 167 },
                                { id: "3sum", name: "3Sum", difficulty: "medium", leetcodeNum: 15 },
                                { id: "container-most-water", name: "Container With Most Water", difficulty: "medium", leetcodeNum: 11 },
                                { id: "remove-duplicates", name: "Remove Duplicates from Sorted Array", difficulty: "easy", leetcodeNum: 26 },
                                { id: "move-zeroes", name: "Move Zeroes", difficulty: "easy", leetcodeNum: 283 },
                                { id: "sort-colors", name: "Sort Colors", difficulty: "medium", leetcodeNum: 75 },
                                { id: "valid-palindrome", name: "Valid Palindrome", difficulty: "easy", leetcodeNum: 125 },
                                { id: "trapping-rain-water", name: "Trapping Rain Water", difficulty: "hard", leetcodeNum: 42 }
                            ]
                        },
                        slidingWindow: {
                            name: "Sliding Window",
                            count: 8,
                            problems: [
                                { id: "max-subarray", name: "Maximum Subarray", difficulty: "medium", leetcodeNum: 53 },
                                { id: "longest-substring", name: "Longest Substring Without Repeating Characters", difficulty: "medium", leetcodeNum: 3 },
                                { id: "min-window", name: "Minimum Window Substring", difficulty: "hard", leetcodeNum: 76 },
                                { id: "sliding-window-max", name: "Sliding Window Maximum", difficulty: "hard", leetcodeNum: 239 },
                                { id: "permutation-string", name: "Permutation in String", difficulty: "medium", leetcodeNum: 567 },
                                { id: "find-anagrams", name: "Find All Anagrams in a String", difficulty: "medium", leetcodeNum: 438 },
                                { id: "longest-repeating", name: "Longest Repeating Character Replacement", difficulty: "medium", leetcodeNum: 424 },
                                { id: "longest-k-distinct", name: "Longest Substring with At Most K Distinct Characters", difficulty: "medium", leetcodeNum: 340 }
                            ]
                        },
                        prefixSum: {
                            name: "Prefix Sum",
                            count: 5,
                            problems: [
                                { id: "subarray-sum-k", name: "Subarray Sum Equals K", difficulty: "medium", leetcodeNum: 560 },
                                { id: "product-except-self", name: "Product of Array Except Self", difficulty: "medium", leetcodeNum: 238 },
                                { id: "range-sum-query", name: "Range Sum Query - Immutable", difficulty: "easy", leetcodeNum: 303 },
                                { id: "contiguous-array", name: "Contiguous Array", difficulty: "medium", leetcodeNum: 525 },
                                { id: "subarray-sums-divisible", name: "Subarray Sums Divisible by K", difficulty: "medium", leetcodeNum: 974 }
                            ]
                        },
                        kadane: {
                            name: "Kadane's Algorithm",
                            count: 4,
                            problems: [
                                { id: "max-subarray-kadane", name: "Maximum Subarray", difficulty: "medium", leetcodeNum: 53 },
                                { id: "max-product-subarray", name: "Maximum Product Subarray", difficulty: "medium", leetcodeNum: 152 },
                                { id: "max-sum-circular", name: "Maximum Sum Circular Subarray", difficulty: "medium", leetcodeNum: 918 },
                                { id: "k-concatenation-max", name: "K Concatenation Maximum Sum", difficulty: "medium", leetcodeNum: 1191 }
                            ]
                        },
                        stringManipulation: {
                            name: "String Manipulation",
                            count: 10,
                            problems: [
                                { id: "reverse-string", name: "Reverse String", difficulty: "easy", leetcodeNum: 344 },
                                { id: "valid-anagram", name: "Valid Anagram", difficulty: "easy", leetcodeNum: 242 },
                                { id: "group-anagrams", name: "Group Anagrams", difficulty: "medium", leetcodeNum: 49 },
                                { id: "longest-palindrome-substr", name: "Longest Palindromic Substring", difficulty: "medium", leetcodeNum: 5 },
                                { id: "implement-strstr", name: "Implement strStr()", difficulty: "easy", leetcodeNum: 28 },
                                { id: "longest-common-prefix", name: "Longest Common Prefix", difficulty: "easy", leetcodeNum: 14 },
                                { id: "string-to-integer", name: "String to Integer (atoi)", difficulty: "medium", leetcodeNum: 8 },
                                { id: "palindromic-substrings", name: "Palindromic Substrings", difficulty: "medium", leetcodeNum: 647 },
                                { id: "encode-decode-strings", name: "Encode and Decode Strings", difficulty: "medium", leetcodeNum: 271 },
                                { id: "is-subsequence", name: "Is Subsequence", difficulty: "easy", leetcodeNum: 392 }
                            ]
                        },
                        anagrams: {
                            name: "Anagram Problems",
                            count: 7,
                            problems: [
                                { id: "valid-anagram-2", name: "Valid Anagram", difficulty: "easy", leetcodeNum: 242 },
                                { id: "group-anagrams-2", name: "Group Anagrams", difficulty: "medium", leetcodeNum: 49 },
                                { id: "find-all-anagrams", name: "Find All Anagrams in a String", difficulty: "medium", leetcodeNum: 438 },
                                { id: "anagram-mappings", name: "Find Anagram Mappings", difficulty: "easy", leetcodeNum: 760 },
                                { id: "isomorphic-strings", name: "Isomorphic Strings", difficulty: "easy", leetcodeNum: 205 },
                                { id: "word-pattern", name: "Word Pattern", difficulty: "easy", leetcodeNum: 290 },
                                { id: "group-shifted-strings", name: "Group Shifted Strings", difficulty: "medium", leetcodeNum: 249 }
                            ]
                        }
                    },
                    pythonPatterns: [
                        {
                            name: "Two Pointers Pattern",
                            code: `def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []`
                        },
                        {
                            name: "Sliding Window Pattern",
                            code: `def max_subarray_sum(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum`
                        },
                        {
                            name: "Using defaultdict/Counter",
                            code: `from collections import Counter, defaultdict

def group_anagrams(strs):
    anagrams = defaultdict(list)
    for s in strs:
        sorted_s = ''.join(sorted(s))
        anagrams[sorted_s].append(s)
    return list(anagrams.values())`
                        }
                    ]
                }
            }
        },
        
        month2: {
            title: "Month 2: Fundamental Data Structures",
            totalProblems: 60,
            weeks: {
                week1: {
                    title: "Week 1: Linked Lists",
                    duration: "7 days",
                    totalProblems: 15,
                    topics: [
                        "Linked List reversal (iterative & recursive)",
                        "Cycle detection (Floyd's algorithm)",
                        "Merge two sorted lists",
                        "Find middle element",
                        "Remove nth node from end",
                        "Palindrome linked list",
                        "Intersection of two lists"
                    ],
                    problems: [
                        { id: "reverse-linked-list", name: "Reverse Linked List", difficulty: "easy", leetcodeNum: 206 },
                        { id: "merge-two-lists", name: "Merge Two Sorted Lists", difficulty: "easy", leetcodeNum: 21 },
                        { id: "linked-list-cycle", name: "Linked List Cycle", difficulty: "easy", leetcodeNum: 141 },
                        { id: "linked-list-cycle-ii", name: "Linked List Cycle II", difficulty: "medium", leetcodeNum: 142 },
                        { id: "remove-nth-from-end", name: "Remove Nth Node From End", difficulty: "medium", leetcodeNum: 19 },
                        { id: "palindrome-linked-list", name: "Palindrome Linked List", difficulty: "easy", leetcodeNum: 234 },
                        { id: "intersection-two-lists", name: "Intersection of Two Linked Lists", difficulty: "easy", leetcodeNum: 160 },
                        { id: "add-two-numbers", name: "Add Two Numbers", difficulty: "medium", leetcodeNum: 2 },
                        { id: "reorder-list", name: "Reorder List", difficulty: "medium", leetcodeNum: 143 },
                        { id: "remove-duplicates-sorted", name: "Remove Duplicates from Sorted List", difficulty: "easy", leetcodeNum: 83 },
                        { id: "copy-random-pointer", name: "Copy List with Random Pointer", difficulty: "medium", leetcodeNum: 138 },
                        { id: "swap-nodes-pairs", name: "Swap Nodes in Pairs", difficulty: "medium", leetcodeNum: 24 },
                        { id: "odd-even-linked-list", name: "Odd Even Linked List", difficulty: "medium", leetcodeNum: 328 },
                        { id: "lru-cache", name: "LRU Cache", difficulty: "medium", leetcodeNum: 146 },
                        { id: "merge-k-sorted", name: "Merge k Sorted Lists", difficulty: "hard", leetcodeNum: 23 }
                    ],
                    pythonImplementation: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    prev, curr = None, head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`
                },
                
                week2: {
                    title: "Week 2: Stacks & Queues",
                    duration: "7 days",
                    totalProblems: 15,
                    topics: [
                        "Stack implementation using arrays/lists",
                        "Queue implementation using deque",
                        "Monotonic stack pattern",
                        "Valid parentheses problems",
                        "Min/Max stack design",
                        "Sliding window with deque"
                    ],
                    problems: [
                        { id: "valid-parentheses", name: "Valid Parentheses", difficulty: "easy", leetcodeNum: 20 },
                        { id: "min-stack", name: "Min Stack", difficulty: "medium", leetcodeNum: 155 },
                        { id: "evaluate-rpn", name: "Evaluate Reverse Polish Notation", difficulty: "medium", leetcodeNum: 150 },
                        { id: "daily-temperatures", name: "Daily Temperatures", difficulty: "medium", leetcodeNum: 739 },
                        { id: "largest-rectangle", name: "Largest Rectangle in Histogram", difficulty: "hard", leetcodeNum: 84 },
                        { id: "sliding-window-maximum", name: "Sliding Window Maximum", difficulty: "hard", leetcodeNum: 239 },
                        { id: "implement-queue-stacks", name: "Implement Queue using Stacks", difficulty: "easy", leetcodeNum: 232 },
                        { id: "implement-stack-queues", name: "Implement Stack using Queues", difficulty: "easy", leetcodeNum: 225 },
                        { id: "decode-string", name: "Decode String", difficulty: "medium", leetcodeNum: 394 },
                        { id: "asteroid-collision", name: "Asteroid Collision", difficulty: "medium", leetcodeNum: 735 },
                        { id: "next-greater-element", name: "Next Greater Element I", difficulty: "easy", leetcodeNum: 496 },
                        { id: "maximal-rectangle", name: "Maximal Rectangle", difficulty: "hard", leetcodeNum: 85 },
                        { id: "basic-calculator", name: "Basic Calculator", difficulty: "hard", leetcodeNum: 224 },
                        { id: "trapping-rain-water-stack", name: "Trapping Rain Water", difficulty: "hard", leetcodeNum: 42 },
                        { id: "remove-k-digits", name: "Remove K Digits", difficulty: "medium", leetcodeNum: 402 }
                    ]
                },
                
                week3_4: {
                    title: "Week 3-4: Trees",
                    duration: "14 days",
                    totalProblems: 30,
                    topics: [
                        "Tree traversals (Inorder, Preorder, Postorder)",
                        "BFS (Level Order Traversal)",
                        "DFS applications",
                        "Binary Search Tree operations",
                        "Tree construction problems",
                        "Path and ancestor problems"
                    ],
                    categories: {
                        traversals: {
                            name: "Tree Traversals",
                            problems: [
                                { id: "inorder-traversal", name: "Binary Tree Inorder Traversal", difficulty: "easy", leetcodeNum: 94 },
                                { id: "preorder-traversal", name: "Binary Tree Preorder Traversal", difficulty: "easy", leetcodeNum: 144 },
                                { id: "postorder-traversal", name: "Binary Tree Postorder Traversal", difficulty: "easy", leetcodeNum: 145 },
                                { id: "level-order", name: "Binary Tree Level Order Traversal", difficulty: "medium", leetcodeNum: 102 },
                                { id: "zigzag-level-order", name: "Binary Tree Zigzag Level Order Traversal", difficulty: "medium", leetcodeNum: 103 }
                            ]
                        },
                        properties: {
                            name: "Tree Properties",
                            problems: [
                                { id: "max-depth", name: "Maximum Depth of Binary Tree", difficulty: "easy", leetcodeNum: 104 },
                                { id: "min-depth", name: "Minimum Depth of Binary Tree", difficulty: "easy", leetcodeNum: 111 },
                                { id: "diameter-tree", name: "Diameter of Binary Tree", difficulty: "easy", leetcodeNum: 543 },
                                { id: "balanced-tree", name: "Balanced Binary Tree", difficulty: "easy", leetcodeNum: 110 },
                                { id: "symmetric-tree", name: "Symmetric Tree", difficulty: "easy", leetcodeNum: 101 }
                            ]
                        },
                        bst: {
                            name: "Binary Search Trees",
                            problems: [
                                { id: "validate-bst", name: "Validate Binary Search Tree", difficulty: "medium", leetcodeNum: 98 },
                                { id: "kth-smallest-bst", name: "Kth Smallest Element in a BST", difficulty: "medium", leetcodeNum: 230 },
                                { id: "insert-bst", name: "Insert into a Binary Search Tree", difficulty: "medium", leetcodeNum: 701 },
                                { id: "delete-node-bst", name: "Delete Node in a BST", difficulty: "medium", leetcodeNum: 450 },
                                { id: "convert-sorted-array-bst", name: "Convert Sorted Array to Binary Search Tree", difficulty: "easy", leetcodeNum: 108 }
                            ]
                        },
                        paths: {
                            name: "Path Problems",
                            problems: [
                                { id: "path-sum", name: "Path Sum", difficulty: "easy", leetcodeNum: 112 },
                                { id: "path-sum-ii", name: "Path Sum II", difficulty: "medium", leetcodeNum: 113 },
                                { id: "binary-tree-paths", name: "Binary Tree Paths", difficulty: "easy", leetcodeNum: 257 },
                                { id: "sum-root-to-leaf", name: "Sum Root to Leaf Numbers", difficulty: "medium", leetcodeNum: 129 },
                                { id: "max-path-sum", name: "Binary Tree Maximum Path Sum", difficulty: "hard", leetcodeNum: 124 }
                            ]
                        },
                        construction: {
                            name: "Tree Construction",
                            problems: [
                                { id: "construct-inorder-preorder", name: "Construct Binary Tree from Preorder and Inorder", difficulty: "medium", leetcodeNum: 105 },
                                { id: "construct-inorder-postorder", name: "Construct Binary Tree from Inorder and Postorder", difficulty: "medium", leetcodeNum: 106 },
                                { id: "serialize-deserialize", name: "Serialize and Deserialize Binary Tree", difficulty: "hard", leetcodeNum: 297 },
                                { id: "flatten-binary-tree", name: "Flatten Binary Tree to Linked List", difficulty: "medium", leetcodeNum: 114 },
                                { id: "invert-binary-tree", name: "Invert Binary Tree", difficulty: "easy", leetcodeNum: 226 }
                            ]
                        }
                    }
                }
            }
        },
        
        month3: {
            title: "Month 3: Graphs & Heaps",
            totalProblems: 40,
            weeks: {
                week1_2: {
                    title: "Week 1-2: Graph Algorithms",
                    duration: "14 days",
                    totalProblems: 25,
                    topics: [
                        "Graph representations (Adjacency List/Matrix)",
                        "BFS traversal",
                        "DFS traversal",
                        "Shortest path algorithms (Dijkstra, Bellman-Ford)",
                        "Topological sort",
                        "Union-Find (Disjoint Set)",
                        "Connected components",
                        "Cycle detection"
                    ],
                    categories: {
                        bfsDfs: {
                            name: "BFS/DFS Basics",
                            problems: [
                                { id: "number-of-islands", name: "Number of Islands", difficulty: "medium", leetcodeNum: 200 },
                                { id: "clone-graph", name: "Clone Graph", difficulty: "medium", leetcodeNum: 133 },
                                { id: "course-schedule", name: "Course Schedule", difficulty: "medium", leetcodeNum: 207 },
                                { id: "pacific-atlantic", name: "Pacific Atlantic Water Flow", difficulty: "medium", leetcodeNum: 417 },
                                { id: "surrounded-regions", name: "Surrounded Regions", difficulty: "medium", leetcodeNum: 130 }
                            ]
                        },
                        shortestPath: {
                            name: "Shortest Path",
                            problems: [
                                { id: "word-ladder", name: "Word Ladder", difficulty: "hard", leetcodeNum: 127 },
                                { id: "network-delay-time", name: "Network Delay Time", difficulty: "medium", leetcodeNum: 743 },
                                { id: "cheapest-flights", name: "Cheapest Flights Within K Stops", difficulty: "medium", leetcodeNum: 787 },
                                { id: "min-knight-moves", name: "Minimum Knight Moves", difficulty: "medium", leetcodeNum: 1197 },
                                { id: "shortest-path-binary-matrix", name: "Shortest Path in Binary Matrix", difficulty: "medium", leetcodeNum: 1091 }
                            ]
                        },
                        topologicalSort: {
                            name: "Topological Sort",
                            problems: [
                                { id: "course-schedule-ii", name: "Course Schedule II", difficulty: "medium", leetcodeNum: 210 },
                                { id: "alien-dictionary", name: "Alien Dictionary", difficulty: "hard", leetcodeNum: 269 },
                                { id: "min-height-trees", name: "Minimum Height Trees", difficulty: "medium", leetcodeNum: 310 },
                                { id: "sequence-reconstruction", name: "Sequence Reconstruction", difficulty: "medium", leetcodeNum: 444 }
                            ]
                        },
                        unionFind: {
                            name: "Union-Find",
                            problems: [
                                { id: "redundant-connection", name: "Redundant Connection", difficulty: "medium", leetcodeNum: 684 },
                                { id: "number-islands-ii", name: "Number of Islands II", difficulty: "hard", leetcodeNum: 305 },
                                { id: "accounts-merge", name: "Accounts Merge", difficulty: "medium", leetcodeNum: 721 },
                                { id: "smallest-string-swaps", name: "Smallest String With Swaps", difficulty: "medium", leetcodeNum: 1202 }
                            ]
                        },
                        advanced: {
                            name: "Advanced Graph",
                            problems: [
                                { id: "critical-connections", name: "Critical Connections in a Network", difficulty: "hard", leetcodeNum: 1192 },
                                { id: "number-provinces", name: "Number of Provinces", difficulty: "medium", leetcodeNum: 547 },
                                { id: "graph-valid-tree", name: "Graph Valid Tree", difficulty: "medium", leetcodeNum: 261 },
                                { id: "reconstruct-itinerary", name: "Reconstruct Itinerary", difficulty: "hard", leetcodeNum: 332 }
                            ]
                        }
                    }
                },
                
                week3_4: {
                    title: "Week 3-4: Heaps & Priority Queues",
                    duration: "14 days",
                    totalProblems: 15,
                    topics: [
                        "Min heap / Max heap operations",
                        "Heapify process",
                        "Top K elements pattern",
                        "K-way merge pattern",
                        "Median from stream",
                        "Meeting rooms problems"
                    ],
                    problems: [
                        { id: "kth-largest-element", name: "Kth Largest Element in an Array", difficulty: "medium", leetcodeNum: 215 },
                        { id: "top-k-frequent", name: "Top K Frequent Elements", difficulty: "medium", leetcodeNum: 347 },
                        { id: "merge-k-sorted-lists", name: "Merge k Sorted Lists", difficulty: "hard", leetcodeNum: 23 },
                        { id: "find-median-stream", name: "Find Median from Data Stream", difficulty: "hard", leetcodeNum: 295 },
                        { id: "task-scheduler", name: "Task Scheduler", difficulty: "medium", leetcodeNum: 621 },
                        { id: "reorganize-string", name: "Reorganize String", difficulty: "medium", leetcodeNum: 767 },
                        { id: "kth-smallest-sorted-matrix", name: "Kth Smallest Element in a Sorted Matrix", difficulty: "medium", leetcodeNum: 378 },
                        { id: "meeting-rooms-ii", name: "Meeting Rooms II", difficulty: "medium", leetcodeNum: 253 },
                        { id: "k-closest-points", name: "K Closest Points to Origin", difficulty: "medium", leetcodeNum: 973 },
                        { id: "last-stone-weight", name: "Last Stone Weight", difficulty: "easy", leetcodeNum: 1046 },
                        { id: "kth-largest-stream", name: "Kth Largest Element in a Stream", difficulty: "easy", leetcodeNum: 703 },
                        { id: "furthest-building", name: "Furthest Building You Can Reach", difficulty: "medium", leetcodeNum: 1642 },
                        { id: "minimum-cost-hire", name: "Minimum Cost to Hire K Workers", difficulty: "hard", leetcodeNum: 857 },
                        { id: "ipo", name: "IPO", difficulty: "hard", leetcodeNum: 502 },
                        { id: "sliding-window-median", name: "Sliding Window Median", difficulty: "hard", leetcodeNum: 480 }
                    ]
                }
            }
        }
    },
    
    // PHASE 2: MONTHS 4-6
    phase2: {
        month4: {
            title: "Month 4: Dynamic Programming",
            totalProblems: 40,
            weeks: {
                week1_2: {
                    title: "Week 1-2: DP Fundamentals",
                    duration: "14 days",
                    totalProblems: 20,
                    topics: [
                        "1D DP (Fibonacci, Climbing Stairs)",
                        "2D DP (LCS, Edit Distance)",
                        "Knapsack problems (0/1, Unbounded, Fractional)",
                        "DP on strings",
                        "Memoization vs Tabulation",
                        "Space optimization techniques"
                    ],
                    problems: [
                        { id: "climbing-stairs", name: "Climbing Stairs", difficulty: "easy", leetcodeNum: 70 },
                        { id: "min-cost-climbing", name: "Min Cost Climbing Stairs", difficulty: "easy", leetcodeNum: 746 },
                        { id: "house-robber", name: "House Robber", difficulty: "medium", leetcodeNum: 198 },
                        { id: "house-robber-ii", name: "House Robber II", difficulty: "medium", leetcodeNum: 213 },
                        { id: "best-time-stock", name: "Best Time to Buy and Sell Stock", difficulty: "easy", leetcodeNum: 121 },
                        { id: "lcs", name: "Longest Common Subsequence", difficulty: "medium", leetcodeNum: 1143 },
                        { id: "edit-distance", name: "Edit Distance", difficulty: "hard", leetcodeNum: 72 },
                        { id: "coin-change", name: "Coin Change", difficulty: "medium", leetcodeNum: 322 },
                        { id: "partition-equal-subset", name: "Partition Equal Subset Sum", difficulty: "medium", leetcodeNum: 416 },
                        { id: "unique-paths", name: "Unique Paths", difficulty: "medium", leetcodeNum: 62 },
                        { id: "unique-paths-ii", name: "Unique Paths II", difficulty: "medium", leetcodeNum: 63 },
                        { id: "word-break", name: "Word Break", difficulty: "medium", leetcodeNum: 139 },
                        { id: "lis", name: "Longest Increasing Subsequence", difficulty: "medium", leetcodeNum: 300 },
                        { id: "longest-palindromic-subseq", name: "Longest Palindromic Subsequence", difficulty: "medium", leetcodeNum: 516 },
                        { id: "min-path-sum", name: "Minimum Path Sum", difficulty: "medium", leetcodeNum: 64 },
                        { id: "triangle", name: "Triangle", difficulty: "medium", leetcodeNum: 120 },
                        { id: "decode-ways", name: "Decode Ways", difficulty: "medium", leetcodeNum: 91 },
                        { id: "jump-game", name: "Jump Game", difficulty: "medium", leetcodeNum: 55 },
                        { id: "max-product-subarray-dp", name: "Maximum Product Subarray", difficulty: "medium", leetcodeNum: 152 },
                        { id: "dungeon-game", name: "Dungeon Game", difficulty: "hard", leetcodeNum: 174 }
                    ]
                },
                
                week3_4: {
                    title: "Week 3-4: Advanced DP",
                    duration: "14 days",
                    totalProblems: 20,
                    topics: [
                        "DP on trees",
                        "DP with bitmask",
                        "State machine DP",
                        "String DP patterns",
                        "Interval DP",
                        "Matrix chain multiplication"
                    ],
                    problems: [
                        { id: "longest-palindrome-substr-dp", name: "Longest Palindromic Substring", difficulty: "medium", leetcodeNum: 5 },
                        { id: "palindrome-partitioning", name: "Palindrome Partitioning", difficulty: "medium", leetcodeNum: 131 },
                        { id: "palindrome-partitioning-ii", name: "Palindrome Partitioning II", difficulty: "hard", leetcodeNum: 132 },
                        { id: "maximal-rectangle-dp", name: "Maximal Rectangle", difficulty: "hard", leetcodeNum: 85 },
                        { id: "trapping-rain-water-dp", name: "Trapping Rain Water", difficulty: "hard", leetcodeNum: 42 },
                        { id: "interleaving-string", name: "Interleaving String", difficulty: "medium", leetcodeNum: 97 },
                        { id: "distinct-subsequences", name: "Distinct Subsequences", difficulty: "hard", leetcodeNum: 115 },
                        { id: "wildcard-matching", name: "Wildcard Matching", difficulty: "hard", leetcodeNum: 44 },
                        { id: "regex-matching", name: "Regular Expression Matching", difficulty: "hard", leetcodeNum: 10 },
                        { id: "burst-balloons", name: "Burst Balloons", difficulty: "hard", leetcodeNum: 312 },
                        { id: "rob-tree", name: "House Robber III", difficulty: "medium", leetcodeNum: 337 },
                        { id: "best-time-cooldown", name: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "medium", leetcodeNum: 309 },
                        { id: "best-time-transaction-fee", name: "Best Time to Buy and Sell Stock with Transaction Fee", difficulty: "medium", leetcodeNum: 714 },
                        { id: "shortest-path-all-nodes", name: "Shortest Path Visiting All Nodes", difficulty: "hard", leetcodeNum: 847 },
                        { id: "russian-doll", name: "Russian Doll Envelopes", difficulty: "hard", leetcodeNum: 354 },
                        { id: "minimum-cost-tickets", name: "Minimum Cost For Tickets", difficulty: "medium", leetcodeNum: 983 },
                        { id: "stone-game", name: "Stone Game", difficulty: "medium", leetcodeNum: 877 },
                        { id: "maximum-alternating-subseq", name: "Maximum Alternating Subsequence Sum", difficulty: "medium", leetcodeNum: 1911 },
                        { id: "count-square-submatrices", name: "Count Square Submatrices with All Ones", difficulty: "medium", leetcodeNum: 1277 },
                        { id: "ugly-number-ii", name: "Ugly Number II", difficulty: "medium", leetcodeNum: 264 }
                    ]
                }
            }
        },
        
        month5: {
            title: "Month 5: Greedy, Backtracking & Bit Manipulation",
            totalProblems: 40,
            weeks: {
                week1_2: {
                    title: "Week 1-2: Greedy Algorithms",
                    duration: "14 days",
                    totalProblems: 15,
                    problems: [
                        { id: "jump-game-greedy", name: "Jump Game", difficulty: "medium", leetcodeNum: 55 },
                        { id: "jump-game-ii", name: "Jump Game II", difficulty: "medium", leetcodeNum: 45 },
                        { id: "gas-station", name: "Gas Station", difficulty: "medium", leetcodeNum: 134 },
                        { id: "non-overlapping-intervals", name: "Non-overlapping Intervals", difficulty: "medium", leetcodeNum: 435 },
                        { id: "minimum-arrows", name: "Minimum Number of Arrows to Burst Balloons", difficulty: "medium", leetcodeNum: 452 },
                        { id: "task-scheduler-greedy", name: "Task Scheduler", difficulty: "medium", leetcodeNum: 621 },
                        { id: "reorganize-string-greedy", name: "Reorganize String", difficulty: "medium", leetcodeNum: 767 },
                        { id: "merge-intervals", name: "Merge Intervals", difficulty: "medium", leetcodeNum: 56 },
                        { id: "insert-interval", name: "Insert Interval", difficulty: "medium", leetcodeNum: 57 },
                        { id: "meeting-rooms", name: "Meeting Rooms", difficulty: "easy", leetcodeNum: 252 },
                        { id: "two-city-scheduling", name: "Two City Scheduling", difficulty: "medium", leetcodeNum: 1029 },
                        { id: "partition-labels", name: "Partition Labels", difficulty: "medium", leetcodeNum: 763 },
                        { id: "hand-of-straights", name: "Hand of Straights", difficulty: "medium", leetcodeNum: 846 },
                        { id: "candy", name: "Candy", difficulty: "hard", leetcodeNum: 135 },
                        { id: "valid-parenthesis-string", name: "Valid Parenthesis String", difficulty: "medium", leetcodeNum: 678 }
                    ]
                },
                
                week3: {
                    title: "Week 3: Backtracking",
                    duration: "7 days",
                    totalProblems: 12,
                    problems: [
                        { id: "subsets", name: "Subsets", difficulty: "medium", leetcodeNum: 78 },
                        { id: "subsets-ii", name: "Subsets II", difficulty: "medium", leetcodeNum: 90 },
                        { id: "permutations", name: "Permutations", difficulty: "medium", leetcodeNum: 46 },
                        { id: "permutations-ii", name: "Permutations II", difficulty: "medium", leetcodeNum: 47 },
                        { id: "combinations", name: "Combinations", difficulty: "medium", leetcodeNum: 77 },
                        { id: "combination-sum", name: "Combination Sum", difficulty: "medium", leetcodeNum: 39 },
                        { id: "combination-sum-ii", name: "Combination Sum II", difficulty: "medium", leetcodeNum: 40 },
                        { id: "palindrome-partition-backtrack", name: "Palindrome Partitioning", difficulty: "medium", leetcodeNum: 131 },
                        { id: "letter-combinations", name: "Letter Combinations of a Phone Number", difficulty: "medium", leetcodeNum: 17 },
                        { id: "n-queens", name: "N-Queens", difficulty: "hard", leetcodeNum: 51 },
                        { id: "sudoku-solver", name: "Sudoku Solver", difficulty: "hard", leetcodeNum: 37 },
                        { id: "word-search", name: "Word Search", difficulty: "medium", leetcodeNum: 79 }
                    ]
                },
                
                week4: {
                    title: "Week 4: Bit Manipulation",
                    duration: "7 days",
                    totalProblems: 10,
                    problems: [
                        { id: "single-number", name: "Single Number", difficulty: "easy", leetcodeNum: 136 },
                        { id: "single-number-ii", name: "Single Number II", difficulty: "medium", leetcodeNum: 137 },
                        { id: "single-number-iii", name: "Single Number III", difficulty: "medium", leetcodeNum: 260 },
                        { id: "counting-bits", name: "Counting Bits", difficulty: "easy", leetcodeNum: 338 },
                        { id: "number-of-1-bits", name: "Number of 1 Bits", difficulty: "easy", leetcodeNum: 191 },
                        { id: "reverse-bits", name: "Reverse Bits", difficulty: "easy", leetcodeNum: 190 },
                        { id: "power-of-two", name: "Power of Two", difficulty: "easy", leetcodeNum: 231 },
                        { id: "missing-number", name: "Missing Number", difficulty: "easy", leetcodeNum: 268 },
                        { id: "sum-two-integers", name: "Sum of Two Integers", difficulty: "medium", leetcodeNum: 371 },
                        { id: "bitwise-and-range", name: "Bitwise AND of Numbers Range", difficulty: "medium", leetcodeNum: 201 }
                    ]
                }
            }
        },
        
        month6: {
            title: "Month 6: Advanced Topics & System Design Intro",
            totalProblems: 40,
            weeks: {
                week1_2: {
                    title: "Week 1-2: Advanced Data Structures",
                    duration: "14 days",
                    topics: [
                        "Trie (Prefix Tree)",
                        "Segment Tree",
                        "Fenwick Tree (Binary Indexed Tree)",
                        "Disjoint Set (Union-Find)",
                        "LRU/LFU Cache design"
                    ],
                    problems: [
                        { id: "implement-trie", name: "Implement Trie (Prefix Tree)", difficulty: "medium", leetcodeNum: 208 },
                        { id: "word-search-ii", name: "Word Search II", difficulty: "hard", leetcodeNum: 212 },
                        { id: "design-add-search", name: "Design Add and Search Words Data Structure", difficulty: "medium", leetcodeNum: 211 },
                        { id: "lru-cache-advanced", name: "LRU Cache", difficulty: "medium", leetcodeNum: 146 },
                        { id: "lfu-cache", name: "LFU Cache", difficulty: "hard", leetcodeNum: 460 },
                        { id: "range-sum-query-mutable", name: "Range Sum Query - Mutable", difficulty: "medium", leetcodeNum: 307 },
                        { id: "longest-word-dictionary", name: "Longest Word in Dictionary", difficulty: "medium", leetcodeNum: 720 },
                        { id: "replace-words", name: "Replace Words", difficulty: "medium", leetcodeNum: 648 }
                    ]
                },
                
                week3_4: {
                    title: "Week 3-4: System Design Basics",
                    duration: "14 days",
                    topics: [
                        "Design URL Shortener",
                        "Design Rate Limiter",
                        "Design LRU/LFU Cache",
                        "Design Search Autocomplete",
                        "Design Parking Lot System (OOP)"
                    ],
                    problems: [
                        { id: "encode-decode-tinyurl", name: "Encode and Decode TinyURL", difficulty: "medium", leetcodeNum: 535 },
                        { id: "design-hit-counter", name: "Design Hit Counter", difficulty: "medium", leetcodeNum: 362 },
                        { id: "logger-rate-limiter", name: "Logger Rate Limiter", difficulty: "easy", leetcodeNum: 359 },
                        { id: "design-hashmap", name: "Design HashMap", difficulty: "easy", leetcodeNum: 706 },
                        { id: "design-hashset", name: "Design HashSet", difficulty: "easy", leetcodeNum: 705 },
                        { id: "design-twitter", name: "Design Twitter", difficulty: "medium", leetcodeNum: 355 },
                        { id: "design-search-autocomplete", name: "Design Search Autocomplete System", difficulty: "hard", leetcodeNum: 642 },
                        { id: "design-leaderboard", name: "Design A Leaderboard", difficulty: "medium", leetcodeNum: 1244 }
                    ]
                }
            }
        }
    },
    
    // Add resources section
    resources: {
        books: [
            {
                title: "Fluent Python",
                author: "Luciano Ramalho",
                category: "Python Mastery",
                description: "Deep dive into Python's features and best practices"
            },
            {
                title: "Grokking Algorithms",
                author: "Aditya Bhargava",
                category: "DSA Fundamentals",
                description: "Illustrated guide to algorithms with clear explanations"
            },
            {
                title: "System Design Interview",
                author: "Alex Xu",
                category: "System Design",
                description: "Volume 1 & 2 - Comprehensive system design guide"
            },
            {
                title: "Designing Data-Intensive Applications",
                author: "Martin Kleppmann",
                category: "Backend/Distributed",
                description: "Deep dive into distributed systems and data management"
            }
        ],
        
        courses: [
            {
                name: "NeetCode",
                type: "YouTube/Website",
                category: "DSA Practice",
                description: "LeetCode problem walkthroughs with clear explanations"
            },
            {
                name: "AlgoExpert",
                type: "Paid Platform",
                category: "DSA Practice",
                description: "Comprehensive DSA course with 160+ questions"
            },
            {
                name: "Real Python",
                type: "Website",
                category: "Python",
                description: "Advanced Python tutorials and articles"
            },
            {
                name: "Educative.io",
                type: "Paid Platform",
                category: "Paid",
                description: "Grokking courses for coding interview patterns"
            }
        ],
        
        platforms: [
            {
                name: "LeetCode",
                description: "Primary problem-solving platform",
                target: "450+ problems"
            },
            {
                name: "Pramp",
                description: "Free peer mock interviews",
                target: "Interview Prep"
            },
            {
                name: "interviewing.io",
                description: "Mock interviews with engineers",
                target: "Paid"
            },
            {
                name: "HackerRank",
                description: "Additional practice and contests",
                target: "Free"
            }
        ],
        
        links: [
            {
                name: "NeetCode Roadmap",
                url: "https://neetcode.io/roadmap",
                description: "Curated list of 150 essential problems"
            },
            {
                name: "Blind 75",
                url: "https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU",
                description: "Must-solve 75 problems for interviews"
            },
            {
                name: "Python Docs",
                url: "https://docs.python.org/3/",
                description: "Official Python documentation"
            },
            {
                name: "VisuAlgo",
                url: "https://visualgo.net",
                description: "Algorithm visualizations"
            }
        ]
    },
    
    studyTips: [
        {
            icon: "⏰",
            title: "Consistency > Intensity",
            description: "2-3 hours daily beats 12 hours on weekends. Build sustainable habits."
        },
        {
            icon: "📝",
            title: "Document Everything",
            description: "Keep a problem-solving journal. Write down patterns, mistakes, and insights."
        },
        {
            icon: "🔄",
            title: "Spaced Repetition",
            description: "Review problems after 1 day, 1 week, 1 month. Solidifies understanding."
        },
        {
            icon: "🗣️",
            title: "Explain Out Loud",
            description: "Verbalize your approach. If you can't explain it, you don't understand it."
        },
        {
            icon: "💪",
            title: "Struggle Before Solution",
            description: "Spend 30-45 minutes on a problem before looking at hints. Struggle builds skill."
        },
        {
            icon: "🎯",
            title: "Focus on Patterns",
            description: "Recognize patterns across problems. Once you see the pattern, solving becomes easier."
        },
        {
            icon: "🔍",
            title: "Optimize After Solving",
            description: "First make it work, then make it optimal. Study O(n) vs O(n²) solutions."
        },
        {
            icon: "🧪",
            title: "Test Edge Cases",
            description: "Empty arrays, single elements, duplicates, negatives. Always test thoroughly."
        }
    ]
};

// Export for use in main script
window.fullCurriculum = fullCurriculum;
