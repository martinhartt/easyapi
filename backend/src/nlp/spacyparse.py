# Credit: https://github.com/kengz/spacy-nlp/blob/master/src/py/nlp.py

# MIT License
#
# Copyright (c) 2016 Wah Loon Keng
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

from collections import OrderedDict
from spacy.en import English
nlp = English()

# Helper methods
##########################################

def merge_ents(doc):
    '''Helper: merge adjacent entities into single tokens; modifies the doc.'''
    for ent in doc.ents:
        ent.merge(ent.root.tag_, ent.text, ent.label_)
    return doc


def format_POS(token, light=False, flat=False, depth=0):
    '''helper: form the POS output for a token'''
    subtree = OrderedDict([
        ("word", token.text),
        ("lemma", token.lemma_),  # trigger
        ("NE", token.ent_type_),  # trigger
        ("POS_fine", token.tag_),
        ("POS_coarse", token.pos_),
        ("arc", token.dep_),
        ("id", token.i),
        ("start", token.idx),
        ("depth", depth),
        ("modifiers", [])
    ])
    if light:
        subtree.pop("lemma")
        subtree.pop("NE")
    if flat:
        subtree.pop("arc")
        subtree.pop("modifiers")
    return subtree


def POS_tree_(root, light=False, depth=0):
    '''
    Helper: generate a POS tree for a root token.
    The doc must have merge_ents(doc) ran on it.
    '''
    subtree = format_POS(root, light=light, depth=depth)
    for c in root.children:
        subtree["modifiers"].append(POS_tree_(c, light=False, depth=depth+1))
    return subtree


def parse_tree(doc, light=False):
    '''generate the POS tree for all sentences in a doc'''
    merge_ents(doc)  # merge the entities into single tokens first
    return [POS_tree_(sent.root, light=light) for sent in doc.sents]


def parse_list(doc, light=False):
    '''tag the doc first by NER (merged as tokens) then
    POS. Can be seen as the flat version of parse_tree'''
    merge_ents(doc)  # merge the entities into single tokens first
    return [format_POS(token, light=light, flat=True) for token in doc]

# s = "find me flights from New York to London next month"
# doc = nlp(s)
# parse_list(doc)


# Primary methods
##########################################

def parse_sentence(sentence):
    '''
    Main method: parse an input sentence and return the nlp properties.
    '''

    doc = nlp(sentence)
    reply = OrderedDict([
        ("text", doc.text),
        ("len", len(doc)),
        ("tokens", [token.text for token in doc]),
        ("noun_phrases", [token.text for token in doc.noun_chunks]),
        ("parse_tree", parse_tree(doc)),
        ("parse_list", parse_list(doc))
    ])
    return reply

# res = parse_sentence("find me flights from New York to London next month.")


def parse(input):
    '''
    parse for multi-sentences; split and apply parse in a list.
    '''
    return [parse_sentence(sent) for sent in input.split("<#SENT_SEPERATOR#>")]
