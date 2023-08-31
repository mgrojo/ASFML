class BriefTagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(BriefTagHandler, self).__init__('brief')

    def has_parameter(self):
        return False

    def to_markup(self, writer, parameter):
        writer.html('')

class SeeTagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(SeeTagHandler, self).__init__('see')

    def has_parameter(self):
        return False

    def to_markup(self, writer, parameter):
        writer.html('<br/><br/><span class="info">See:</span> ')


class WarningTagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(WarningTagHandler, self).__init__('warning')

    def has_parameter(self):
        return False

    def to_markup(self, writer, parameter):
        writer.html('<br/><br/><span class="warning">Warning!</span> ')


class DeprecatedTagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(DeprecatedTagHandler, self).__init__('deprecated')

    def has_parameter(self):
        return False

    def to_markup(self, writer, parameter):
        writer.html('<br/><br/><span class="danger">Deprecated!</span> ')


class ATagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(ATagHandler, self).__init__('a')

    def has_parameter(self):
        return True

    def to_markup(self, writer, parameter):
        writer.html(' <em>%s</em> ' % parameter)


class PTagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(PTagHandler, self).__init__('p')

    def has_parameter(self):
        return True

    def to_markup(self, writer, parameter):
        writer.html(' <code>%s</code> ' % parameter)


class CodeTagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(CodeTagHandler, self).__init__('code')

    def has_parameter(self):
        return False

    def to_markup(self, writer, parameter):
        writer.html('')


class EndcodeTagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(EndcodeTagHandler, self).__init__('endcode')

    def has_parameter(self):
        return False

    def to_markup(self, writer, parameter):
        writer.html('')


class LiTagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(LiTagHandler, self).__init__('li')

    def has_parameter(self):
        return False

    def to_markup(self, writer, parameter):
        writer.html('</br>&bull; ')


GPS.register_tag_handler(BriefTagHandler())
GPS.register_tag_handler(SeeTagHandler())
GPS.register_tag_handler(WarningTagHandler())
GPS.register_tag_handler(DeprecatedTagHandler())
GPS.register_tag_handler(ATagHandler())
GPS.register_tag_handler(PTagHandler())
GPS.register_tag_handler(CodeTagHandler())
GPS.register_tag_handler(EndcodeTagHandler())
GPS.register_tag_handler(LiTagHandler())
