class BriefTagHandler(GPS.InlineTagHandler):
    def __init__(self):
        super(BriefTagHandler, self).__init__('brief')

    def has_parameter(self):
        return False

    def to_markup(self, writer, parameter):
        writer.text('')

GPS.register_tag_handler(BriefTagHandler())
