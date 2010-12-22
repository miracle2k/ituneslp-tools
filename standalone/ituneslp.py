#!/usr/bin/env python

import sys
from PyQt4.QtCore import *
from PyQt4.QtGui import *
from PyQt4.QtWebKit import *

app = QApplication(sys.argv)
app.setApplicationName("iTunesLP")

web = QWebView()
settings = QWebSettings.globalSettings()
#settings.setAttribute(QWebSettings.DeveloperExtrasEnabled, True)
web.load(QUrl(sys.argv[1]))
web.show()

class PythonJS(QObject):

    @pyqtSignature("QString")
    def play(self, mediaLocation):
        print "Playing: %s" % mediaLocation


f = web.page().mainFrame()
itunes = PythonJS()
f.addToJavaScriptWindowObject("iTunes", itunes)


sys.exit(app.exec_())
