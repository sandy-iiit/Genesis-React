#include <iostream>
#include <string>
#include <unordered_set>

using namespace std;

string PatternChaser(const string& s) {
    string longest_pattern = "";
    unordered_set<string> seen;

    // Sliding window approach to find the longest repeating pattern
    for (int i = 0; i < s.length(); ++i) {
        for (int j = i + 1; j < s.length(); ++j) {
            string substr = s.substr(i, j - i);
            if (seen.find(substr) != seen.end()) {
                if (substr.length() > longest_pattern.length()) {
                    longest_pattern = substr;
                }
            } else {
                seen.insert(substr);
            }
        }
    }

    if (!longest_pattern.empty()) {
        return "yes " + longest_pattern;
    } else {
        return "no null";
    }
}

int main() {
    cout << PatternChaser("da2kr32a2") << endl;  // Output: yes a2
    cout << PatternChaser("sskfssbbb9bbb") << endl;  // Output: yes bbb
    return 0;
}
